import Toast from 'react-native-toast-message'

const toast = {
  showError: (message: string) => {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: 'Error',
      text2: message,
    })
  }
}

export default toast