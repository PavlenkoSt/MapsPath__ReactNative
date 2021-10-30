import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TextStyle, View } from 'react-native'
import { Formik } from 'formik'
import Toast from 'react-native-toast-message'

const AddPathForm = () => {
  const [limit, setLimit] = useState(0)

  const showError = (message: string) => {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: 'Error',
      text2: message,
    })
  }

  const onSubmit = (values: any) => {
    if (!values.title || !values.shortDesc || !values.fullDesc) {
      return showError('Fill in all the fields')
    }

    if (limit > 160) {
      return showError('Short description can\'t be more then 160')
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
            onChange={(e) => setLimit(e.nativeEvent.text.length)}
            value={values.shortDesc}
            multiline={true}
            style={styles.input}
            numberOfLines={2}
            placeholder="Short description"
          />
          <Text style={limit > 160 ? styles.limitWarn : styles.limit}>Limit {limit} of 160</Text>
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

const limitBase = {
  marginBottom: 10,
  alignSelf: 'flex-end',
} as TextStyle

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    borderColor: '#333',
    borderWidth: 2,
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  limitWarn: {
    ...limitBase,
    color: 'red',
  },
  limit: {
    ...limitBase,
    color: '#aaa',
  },
})

export default AddPathForm
