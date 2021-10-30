import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import { Formik } from 'formik'

const AddPathForm = () => {
  const onSubmit = (values: any) => console.log(values)

  return (
    <Formik initialValues={{ title: '', shortDesc: '', fullDesc: '' }} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
            style={styles.input}
            placeholder='Title'
          />
          <TextInput
            onChangeText={handleChange('shortDesc')}
            onBlur={handleBlur('shortDesc')}
            value={values.shortDesc}
            multiline={true}
            style={styles.input}
            numberOfLines={2}
            placeholder='Short description'
          />
          <TextInput
            onChangeText={handleChange('fullDesc')}
            onBlur={handleBlur('fullDesc')}
            value={values.fullDesc}
            multiline={true}
            style={styles.input}
            numberOfLines={4}
            placeholder='Full description'
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
    color: '#333'
  },
})

export default AddPathForm
