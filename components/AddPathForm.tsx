import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { Formik } from 'formik'
import Toast from 'react-native-toast-message'

const AddPathForm = () => {
  const onSubmit = (values: any) => {
    if (!values.title || !values.shortDesc || !values.fullDesc) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Fill in all the fields',
      })
      return
    }
    console.log(values)
  }

  return (
    <Formik initialValues={{ title: '', shortDesc: '', fullDesc: '' }} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
            style={styles.input}
            placeholder="Title"
          />
          <TextInput
            onChangeText={handleChange('shortDesc')}
            onBlur={handleBlur('shortDesc')}
            value={values.shortDesc}
            multiline={true}
            style={styles.input}
            numberOfLines={2}
            placeholder="Short description"
          />
          <TextInput
            onChangeText={handleChange('fullDesc')}
            onBlur={handleBlur('fullDesc')}
            value={values.fullDesc}
            multiline={true}
            style={styles.input}
            numberOfLines={4}
            placeholder="Full description"
          />
          <Button onPress={handleSubmit} title="Add path" />
        </View>
      )}
    </Formik>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderColor: '#333',
    borderWidth: 2,
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
})

export default AddPathForm
