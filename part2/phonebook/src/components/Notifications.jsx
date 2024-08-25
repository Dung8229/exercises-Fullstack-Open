const Style = {
  success: {
    padding: 10,
    backgroundColor: '#C1E899',
    fontColor: '#9A6735',
    borderStyle: 'solid',
    borderRadius: '5',
    borderColor: '#55883B',
    marginBottom: 20,
    marginRight: '50%',
    fontSize: 20,
  },
  error: {
    padding: 10,
    backgroundColor: '#ffbfbf',
    fontColor: '#9A6735',
    borderStyle: 'solid',
    borderRadius: '5',
    borderColor: '#ff2c2c',
    marginBottom: 20,
    marginRight: '50%',
    fontSize: 20,
  },
}

const Notification = ({ message, type='success' }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='error' style={Style[type]}>
        {message}
      </div>
    )
}


export default Notification