import IMarker from './marker'

interface IRoute {
  id: string
  title: string
  shortDesc: string
  fullDesc: string
  markers: IMarker[]
  length: number
  favourite: boolean
}

export default IRoute
