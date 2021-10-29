import IRoute from '../models/Route'
import { useEffect, useState } from 'react'

const useSearch = (routes: IRoute[]) => {
  const [searchVal, setSearchVal] = useState('')
  const [searchedRoutes, setSearchedRoutes] = useState([] as IRoute[])

  useEffect(() => {
    if (searchVal) {
      const search = routes.filter(
        (route: IRoute) =>
          route.title.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0 ||
          route.fullDesc.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0
      )
      setSearchedRoutes(search)
    } else {
      setSearchedRoutes(routes)
    }
  }, [routes, searchVal])

  return { setSearchVal, searchedRoutes }
}

export default useSearch
