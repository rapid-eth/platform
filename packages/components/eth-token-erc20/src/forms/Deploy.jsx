/* --- Global --- */
import React, { useState, useEffect } from 'react';
import { utils } from 'ethers'
import PropTypes from 'prop-types'
import useForm from "react-hook-form";
import { Field, Button, Span, Heading, Flex, Toast  } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'

/* --- Local --- */
import ERC20 from '../contracts/ERC20InitialSupply'
import ContractInformation from '../ContractInformation'

/**
 * @function ERC20TokenTransfer
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
const Transfer = ({ amount, ethers, contractAddress, contractName, delta, styled, ...props }) => {
  const { handleSubmit, register, errors } = useForm();
  const [ message, setMessage ] = useState()
  const [ deploying, setDeploying ] = useState(false)
  const [ advanced, setAdvanced ] = useState()
  const [ status, setStatus ] = useState({
    wallet: false
  })

  const toggleAdvanced = () => setAdvanced(!advanced)

  /**
   * @function FormOnSubmit
   * @param {Object} values 
   */
  const onSubmit = async (values) => {
    if(ethers.wallet) {
      // Constructor
      // string  memory _tokenName,
      // string memory _tokenSymbol,
      // uint8   _decimalUnits,
      // uint256 _amount
      const amountParsed = utils.parseEther(values.amount)
      ethers.deployContract({
        contract: ERC20,
        values: [
          values.name,
          values.symbol,
          Number(values.decimals || 18),
          amountParsed,
        ]
      })
      setDeploying(true)
    } else {
      setMessage('Contract Unavailable')
    }     
  }

  /**
   * @function StatusEffect
   * @description Display component state to user.
   */
  const StatusEffect = () =>useEffect( () => { 
    if(ethers.wallet) {
      setStatus({wallet: true})
    }
  }, [ethers.wallet])

  /**
   * @function MessageEffect
   * @description Display component state to user.
   */
  const MessageEffect = () =>useEffect( () => { 
    if(message) {} // add toast message
  }, [message])
  
  /**
   * @function InitSmartContractEffect
   * @description Initialize contract from abi library with address input.
   * 
   */
  const InitSmartContractEffect = () =>useEffect( () => { 
    if(!ethers.contracts[contractAddress] && props.contractName ) {
      if(props.library[props.contractName]) {
        ethers.contractInitFromLibrary({
          address: props.address,
          contractName: props.contractName
        })
      }
    }
  }, [
      ethers.contracts[contractAddress], // Watch contract instance.
      ethers.library[props.contractName] // Watch library reference.
    ])

  /* --- Init Effects --- */
  StatusEffect()
  MessageEffect()
  if(props.canInitContract) InitSmartContractEffect()

  /* --- Component --- */
  return (
    <>
      {
        props.label &&
        <Heading md {...props.styledLabel}>{props.label}</Heading>
      }
      <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}} {...styled} >
        <Field
          name='name'
          register={register}
          errors={errors}
          label='Token Name'
          defaultValue={props.defaults.amount}
          placeholder="Developer"
        />
        <Field
          name='symbol'
          register={register}
          errors={errors}
          defaultValue={props.defaults.amount}
          label='Token Symbol'
          placeholder="DEV"
        />
        <Field
          name='amount'
          register={register}
          errors={errors}
          defaultValue={props.defaults.amount}
          label='Initial Token Amount'
          placeholder="1,000,000"
        />
        <Span xxs pointer tag='white' my={2} onClick={toggleAdvanced}>Advanced Settings</Span>
        {
          advanced &&
          <>
            <Field
              disabled={!advanced}
              name='decimals'
              register={register}
              errors={errors}
              defaultValue={18}
              label='Decimals'
              placeholder="18"
            />
          </>
        }
        <Flex alignCenter>
          <Button sm type='submit' disabled={!status.wallet} {...props.styledButton}>
            { deploying
              ? <Span>Confirming...</Span>
              : <Span>Deploy {!status.wallet && <Span xxs>Not Connected</Span> } </Span>
            }
          </Button>
          <Toast content={<ContractInformation contractName={props.instance} address={props.address} />} >
            <Span ml={3}><Span xxs tag='white'>INFO</Span></Span>
          </Toast>
        </Flex>
      </form>
    </>
  )
}

Transfer.defaultProps = {
  contractName: undefined,
  canInitContract: false,
  defaults: {},
  label: 'Deploy Token',
  styled: {
    p: 2
  },
  styledButton: {
    variant: 'green',
    width: '100%'
  },
  styledLabel: {
    fontWeight: 700
  }
}

Transfer.propTypes = {
  contractName: PropTypes.string,
  canInitContract: PropTypes.bool,
  defaults: PropTypes.object,
  label: PropTypes.string,
  styled: PropTypes.object,
  styledButton: PropTypes.object,
  styledLabel: PropTypes.object,
}

export default props =><EthersWrapper><Transfer {...props}/></EthersWrapper>