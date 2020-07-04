export const createUUID = () => {
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx-xx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

export const getRandomArbitrary = (min = 5, max = 20) => {
  return Math.random() * (max - min) + min;
}

export const getSelectedTask = (selectedId, tasks) => {
  return tasks.find(({ id }) => id === selectedId);
}
export const getIndexOfSelectedTask = (selectedId, tasks) => {
  return tasks.findIndex(({ id }) => id === selectedId);
}