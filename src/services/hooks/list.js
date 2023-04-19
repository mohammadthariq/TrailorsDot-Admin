import { ListrApis } from "../list";

const { createlist } = new ListrApis();

export const handleCreateList = async (list) => {
	const res = await createlist(list)
    console.log(res);
   return res
}