import { _axios } from "../helper/axios"

export class ListrApis {
	List = async () => {
		return await _axios('get', '/lists')
	}
	createlist = async (data) => {
		console.log(data,"data");
		return await _axios('post', '/list/create', data)
	}
}
