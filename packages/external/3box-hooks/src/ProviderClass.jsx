import React, { Component } from 'react';
import box from '3box/dist/3box'
import PropTypes from 'prop-types';
import Context from './Context';
import Api from './api';
import utilities from './utilities'
/**
 * @function Provider
 * @description Pass BoxProvider state to children component props.
 * @param {Object} props 
 */
class Provider extends Component {
  constructor(props){
    super(props)
    const address = window.ethereum.selectedAddress || ''
    const addressShortened = !address ? null : utilities.shortenAddress(address, 7)

    this.state  = {
      address,
      addressShortened,
      static: box,
      utils: box.idUtils,
      isDebugging: false,
      isInitialized: false,
      isRequestOpen: false,
      isLoggedIn: box.isLoggedIn(address),
      isLoggingIn: false,
      box: undefined,
      instance: undefined,
      listening: {},
      profile: undefined,
      profiles: {}, 
      verified: {},
      requests: [],
      spaces: {},
      threads: {},

      /* ---------------------- */
      // Personal Account APIs
      /* ---------------------- */
      addRequest: async (req) => {
        this.setState({
          isRequestOpen: true,
          requests: [
            ...this.state.requests,
            req
          ]
        })
      },

      requestConfirm: async (index) => {
        let req = this.state.requests[index]
        if(req && req.payload) {        
          switch (req.type) {
            case 'set':
              this.state.set(req.payload)
              break;
          
            default:

              break;
          }

          let requests = this.state.requests
          requests.splice(index, index + 1)
          this.setState({requests})
        }
      },
      requestConfirmAll: async () => {
        let requests = this.state.requests
        requests.map( request => {
          if(requqest && requqest.payload) {        
            switch (req.type) {
              case 'set':
                this.state.set(req.payload)
                break;
            
              default:
  
                break;
            }
            let requests = this.state.requests
            requests.splice(index, index + 1)
            this.setState({requests})
          }
        })
      },

      requestReject: async (index) => {
        let requests = this.state.requests
        requests.splice(index, index + 1)
        this.setState({requests})
      },
      requestRejectAll: async () => {
        this.setState({requests: []})
      },

      
      // 3Box
      /* ---------------------- */
      open: async () => {
        try {
          this.setState({
            isLoggingIn: true
          })
          const profile = await box.openBox(address, window.web3.currentProvider)
          this.setState({
            box: profile,
            instance: profile
          })
        } catch (error) {
          this.setState({
            isLoggedIn: false,
            isLoggingIn: false
          })
        }
      },

      logout: async () => {
        await this.state.box.logout()
        this.setState({
          box: undefined,
          instance: undefined,
          isLoggedIn: false,
          spaces: {},
          threads: {}
        })
      },

      verified: async ({ request, input }) => {
        const result = await this.state.box.verified[request](input)
        this.setState({
          verified: {
            ...this.state.spaces,
            [request]: result
          }
        })
      },

      // Write
      /* ---------------------- */
      get: async ({ key, space, access = 'public', all = false }) => {
        let value
        try {
          if(space) {
            all 
            ? value = await this.state.spaces[space].instance[access].all()
            : value = await  this.state.spaces[space].instance[access].get(key)

            this.setState({
              spaces: {
                ...this.state.spaces,
                [space]: {
                  ...this.state.spaces[space],
                  data: all ? value : { ...this.state.spaces[space], [key]: value}
                }
              }
            })
          } else {
            value = await this.state.box[access].get(key)
            console.log(key, value, 'GETTING')
            this.setState({
              profile: {
                ...this.state.profile,
                [key]: value
              }
            })
          }
        } catch (error) {

        }
      },

      remove: async ({index, space, access, list}) => {
        if(space) {
          const data = await this.state.spaces[space].instance[access].get(list)
          if (data && Array.isArray(data)) {
            let removed = data.splice(Number(index), Number(index + 1))
            const listNew = await this.state.spaces[space].instance[access].set(list, data)
            this.setState({
              spaces: {
                ...this.state.spaces,
                [space]: {
                  ...this.state.spaces[space],
                  data: {
                    ...this.state.spaces[space].data,
                    [list]: data
                  }
                }
              }
            })
          }

        } else {

        }
      },

      /**
       * @function removeItem
       * @description 
       */
      removeItem: async ({index, space, access, list, backup}) => {
        if(space) {
          const data = await this.state.spaces[space].instance[access].get(list)
          if (data && Array.isArray(data)) {
            let removed = data.splice(Number(index), Number(index + 1))
            await this.state.spaces[space].instance[access].set(list, data)
            this.setState({
              spaces: {
                ...this.state.spaces,
                [space]: {
                  ...this.state.spaces[space],
                  data: {
                    ...this.state.spaces[space].data,
                    [list]: data
                  }
                }
              }
            })

            /**
             * When deleting data users might want to first make a 
             * backup/copy in case it was a mistake. The backup key
             * is the place to store that information. 
             */
            if(backup) {
              this.state.set({
                keys: 'backup',
                inputs: removed,
                space: 'meshhub',
                append: true
              })
            }

          }

        } else {

        }
      },

      set: async ({keys, inputs, space, access, append, override}) => {
        try {
          if(space) {

            if(append) {
              const data = await this.state.spaces[space].instance[access].get(append)
              let listUpdated = Array.isArray(data) ? [...data, inputs] : [data, inputs]
              Array.isArray(data)
                ? await this.state.spaces[space].instance[access].set(append, listUpdated)
                : !override // todo set system for overriding data... add to backup space? 
                  ? await this.state.spaces[space].instance[access].set(append, listUpdated)
                  : null

                this.setState({
                    spaces: {
                      ...this.state.spaces,
                      [space]: {
                        ...this.state.spaces[space],
                        data: {
                          ...this.state.spaces[space].data,
                          [append]: listUpdated
                        }
                      }
                    }
                  })
            } else {
              
              await this.state.spaces[space].instance[access].setMultiple(keys, inputs)
            }
            
          } else {
            console.log( keys, inputs, 'setting multiple')
            await this.state.box[access].setMultiple(keys, inputs)
            // await this.state.box[access].set(keys, inputs)
          }
        } catch (error) {
          console.log(error)
        }
      },
      
      publicSetMultiple: async (key, value, sapce) => {
        try {
          await this.state.box.public.setMultiple(key, value)
          toast("Profile Updated");
        } catch (error) {
          console.log(error)
        }
      },

      publicGet: async (key, options, space) => {
        try {
          const value = await this.state.box.public.get(key, options)
          if(value) {
            this.setState({
              profile: {
                ...this.state.profile,
                [key]: value
              }
            })
          } else {
          }
        } catch (error) {
          console.log(error)
        }
      },

      // Link
      /* ---------------------- */
      listAddressLinks: async () => {
        try {
          const status = this.state.box && await this.state.box.listAddressLinks()
          if(status) {
              
          } else {
              
          }
        } catch (error) {

        }
      },
      isAddressLinked: async (queries) => {
        try {
          const status = this.state.box && await this.state.box.isAddressLinked(queries)
          if(status) {
             
          } else {
              
          }
        } catch (error) {
 
        }
      },
      linkAddress: async (name) => {
        try {
          const status = this.state.box && await this.state.box.linkAddress(name)
          if(status) {
              
          } else {
              
          }
        } catch (error) {

        }
        
      },
      removeAddressLink: async (address) => {
        try {
          const status = this.state.box && await this.state.box.removeAddressLink(address)
          if(status) {
              
          } else {
              
          }
        } catch (error) {

        }
      },

      // Spaces
      /* ---------------------- */
      openSpace: async (name) => {
        try {
          const space = await this.state.box.openSpace(name)
          console.log(space, 'spacespacespace')
          const threads = await space.subscribedThreads()
          this.setState({
            spaces: {
              ...this.state.spaces,
              [name]: {
                instance: space,
                threads
              }
            }
          })

          // if(threads && Array.isArray(threads) && threads.length > 0 ) {
          //   threads.forEach( thread =>this.state.joinThreadByAddress(thread.address))
          // }
        } catch (error) {
          
        }
        
      },

      listSpaces: async (address) => {
        const list = await box.listSpaces(address)
        let spaces = {}
        list.forEach(element => {
          spaces[element] = undefined
        });
        this.setState({
          spaces: {
            ...spaces,
            ...this.state.spaces
          }
        })
      },

      // Threads
      /* ---------------------- */
      subscribedThreads: async (name, options, space) => {
        const threads = this.state.spaces['meshhub'].instance.subscribedThreads()

        this.setState({
          threads: {
            ...threads,
            ...this.state.threads
          }
        })

      },
      joinThread: async ({ threadAddress, threadName, options, space}) => {
        try {
          let thread, members, moderators
          if(threadAddress) {
            thread = await this.state.spaces['meshhub'].instance.joinThreadByAddress(threadAddress, options)
          } else {
            thread = await this.state.spaces['meshhub'].instance.joinThread(threadName, options)
          }
          const posts = await thread.getPosts()
          if(thread._members) {
            members = await thread.listMembers()
            moderators = await thread.listModerators()
          }
          
          this.setState({
            threads: {
              ...this.state.threads,
              [threadName]: {
                instance: thread,
                posts,
                members,
                moderators
              }
            }
          })
        } catch (error) {
            
        }
      },
      joinThreadByAddress: async (name, options, space) => {
        try {
          let members = '' ,moderators = ''
          const thread = await this.state.spaces['meshhub'].instance.joinThreadByAddress(name, options)
          thread.onUpdate(TestingThis)
          const posts = await thread.getPosts()
          if(thread._members) {
            members = await thread.listMembers()
            moderators = await thread.listModerators()
          }
          
          
          this.setState({
            threads: {
              ...this.state.threads,
              [name]: {
                instance: thread,
                posts,
                members,
                moderators
              }
            }
          })
        } catch (error) {
            
        }
      },

      threadPost: async ({threadName, post}) => {
        try {
          await this.state.threads[threadName].instance.post(post)
          const posts = await this.state.threads[threadName].instance.getPosts()
          this.setState({
            threads: {
              ...this.state.threads,
              [threadName]: {
                ...this.state.threads[threadName],
                posts,
              }
            }
          })
        } catch (error) {
          console.log(error)
        }
      },

      threadPostDelete: async (thread, postID) => {
        console.log(postID, 'postID')
        await this.state.threads[thread].instance.deletePost(postID)
        const posts = await this.state.threads[thread].instance.getPosts()
        this.setState({
          threads: {
            ...this.state.threads,
            [thread]: {
              ...this.state.threads[thread],
              posts,
            }
          }
        })
      },
      
      threadListen: async (thread, callback) => {
        this.state.threads[thread].onUpdate(callback)
        this.setState({
          listening: {
            ...this.state.listening,
            [name]: true
          }
        })
      },

      threadAddModerator: async (thread, id) => {
        try {
          console.log(thread, id , 'add mod')
          await this.state.threads[thread].instance.addModerator(id)
        } catch (error) {
          console.log(error)
        }
      },
      threadAddMember: async (thread, id) => {
        try {
          console.log(thread, id , 'add member')
          await this.state.threads[thread].instance.addMember(id)
        } catch (error) {
          console.log(error)
        }
      },

      /* ---------------------- */
      // Utility Methods
      /* ---------------------- */
    
      // Profile 
      getProfile: async (address) => {
        const profile = await box.getProfile(address)
        this.setState({
          profile
        })
      },

      lookupProfile: async (address) => {
        if(address) {
          const profile =  await box.getProfile(address)
          this.setState({
            profiles: {
              ...this.state.profiles,
              [address]: {
                ...this.state.profiles[address],
                profile
              }
            }
          })
        }
      },
      
      getThread: async (space, name, firstModerator, members, opts) => {
        const thread = await box.getThread(space, name, firstModerator, members, opts)
        this.setState({
          threads: {
            ...this.state.threads,
            [name]: thread
          }
        })
      },
      
      getThreadByAddress: async (address, name) => {
        const thread = await box.getThreadByAddress(address, name)
        this.setState({
          threads: {
            ...this.state.threads,
            [name]: thread
          }
        })
      },

      getConfig: async (address, opts) => {
        const config = await box.getConfig(address, opts)
        this.setState({
          profiles: {
            ...this.state.profiles,
            [address]: {
              ...this.state.profiles[address],
              config
            }
          }
        })
      },

      // Utilities
      getVerifiedAccounts: async (address) => {
        if(address) {
          let profile = this.state.profiles[address] && this.state.profiles[address].profile
          if(profile) {
            let verified = await box.getVerifiedAccounts(profile)
            this.setState({
              profiles: {
                ...this.state.profiles,
                [address]: {
                  ...this.state.profiles[address],
                  verified
                }
              }
            })
          } else {
            profile =  await box.getProfile(address)
            let verified = await box.getVerifiedAccounts(profile)
            this.setState({
              profiles: {
                ...this.state.profiles,
                [address]: {
                  ...this.state.profiles[address],
                  verified
                }
              }
            })
          }
        } else {
          if(this.state.profile) {
            let verified = await box.getVerifiedAccounts(this.state.profile)
            this.setState({
              profile: {
                ...this.state.profile,
                verified
              }
            })
          } else {
            return false
          }
        }
      }
    }
  }

  // Component Did Mount
  async componentDidMount(){
    let address =  window.ethereum && window.ethereum.selectedAddress || null
    if(address) {
      let isLoggedIn = box.isLoggedIn(address)
      this.state.getProfile(address)

      // IF : Session is active open box.
      if(isLoggedIn && !this.state.box) {
        // this.state.open(address)
        this.state.listSpaces(address)
      }
      this.state.listSpaces(address) // Active Spaces List
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state, 'Box Provider')

    // Request
    if(this.state.requests.length == 0 && prevState.requests.length > 0) {
      this.setState({
        isRequestOpen: false
      })
    }

    // Initial Component Loading
    if(this.state.box && !this.state.isInitialized) {
      this.state.listSpaces()
      this.state.publicGet('credential')
      this.state.getVerifiedAccounts()
      this.setState({
        isInitialized: true
      })

      this.state.get({key: 'job', access: 'public'})
      this.state.get({key: 'employer'})
      this.state.get({key: 'role'})

      this.state.get({
        key: 'proof_email',
        access: 'private',
      })
      this.state.verified({
        request: 'email',
      })
    }
  }
  
  render(){
    const { isInitialized, isLoggedIn, isRequestOpen, requestConfirm, openSpace, requests, instance, spaces } = this.state
    return(
      <>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
        {
          isRequestOpen && isLoggedIn && isInitialized &&
          null
          // <Modal
          //   isSlim
          //   label='Profile Update Request(s)'
          //   content={
          //     <RequestManage
          //       instance={instance}
          //       spaces={spaces}
          //       openSpace={openSpace}
          //       requestConfirm={requestConfirm}
          //       requests={requests}
          //     />}
          //   isOpen={isRequestOpen}
          // />
      }
      </>
    )
  }
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
};

export default Provider;
