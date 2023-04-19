import { _axios } from "../helper/axios"

export class BannerApis {
	Banners = async () => {
		return await _axios('get', '/banners')
	}
	createbanner = async (data) => {
		console.log(data,"data");
		return await _axios('post', '/banner/create', data)
	}
}
