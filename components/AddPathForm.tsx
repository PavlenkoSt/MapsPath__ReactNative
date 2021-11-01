import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { Button, StyleSheet, Text, TextInput, TextStyle, View } from 'react-native'
import { Formik } from 'formik'
import IMarker from '../models/marker'
import { useStore } from '../store'
import toast from '../utilts/toast'

type AddPathFormPropsType = {
  markers: IMarker[]
  length: number
  setMarkers: Dispatch<SetStateAction<IMarker[]>>
  setLength: Dispatch<SetStateAction<number>>
}

const AddPathForm: FC<AddPathFormPropsType> = ({ markers, length, setMarkers, setLength }) => {
  const [limit, setLimit] = useState(0)

  const { routesStore } = useStore()

  const onSubmit = (values: any, { resetForm }: any) => {
    if (!values.title || !values.shortDesc || !values.fullDesc) {
      return toast.showError('Fill in all the fields')
    }

    if (limit > 160) {
      return toast.showError("Short description can't be more then 160")
    }

    if (markers.length < 2){
      return toast.showError("You should add 2 or more markers on map")
    }

    routesStore.addRoute({
      favourite: false,
      id: Date.now().toString(),
      markers,
      length,
      ...values,
    })

    setMarkers([])
    setLength(0)
    resetForm()

    return toast.showSuccess('Route was added')
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
