const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return[year, month, day].map(formatNumber).join('-')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

function getType(file){
  var filename=file;
  var index1=filename.lastIndexOf(".");
  var index2=filename.length;
  var type=filename.substring(index1,index2);
  return type;
}

module.exports = {
  formatTime,
  formatDate,
  getType
}

