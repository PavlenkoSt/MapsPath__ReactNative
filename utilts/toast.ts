import Toast from 'react-native-toast-message'

const toast = {
  showError: (message: string) => {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: 'Error',
      text2: message,
    })
  },
  showSuccess: (message: string) => {
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Success',
      text2: message,
    })
  }
}

export default toast