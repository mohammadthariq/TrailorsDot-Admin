import { BannerApis } from "../banner";

const { createbanner } = new BannerApis();

export const handleCreateBanner = async (banner) => {
    console.log(banner, "banner");
	const res = await createbanner(banner)
    console.log(res);
   return res
}