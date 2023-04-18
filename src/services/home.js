import { _axios } from "../helper/axios"

export class HomeApis {
	homeBanners = async () => {
		return await _axios('get', '/banners')
	}
	homeLists = async () => {
		return await _axios('get', '/lists')
	}
}
