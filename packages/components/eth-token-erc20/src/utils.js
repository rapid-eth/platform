export const decodeLogs = (log, contractEventsInterface) => {
  // Cleanup Logs
  let cleaned = {};
  let decoded = contractEventsInterface.decode(
    log.data,
    log.topics
  );
  contractEventsInterface.inputs.forEach((input, i) => {
    if (input.type === "uint256") { //todo
      let x = decoded[input.name];
      cleaned[input.name] = x.toString(); //todo
    } else {
      cleaned[input.name] = decoded[input.name];
    }
  });
  log.decoded = cleaned;
  return log
}