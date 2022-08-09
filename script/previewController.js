import { form } from "./elems";
import { toBase64 } from "./utils";

 const showPreview = (src) => {
	preview.style.display = 'block';
	preview.src = src;
}
 const hidePreview = () => {
	preview.style.display = '';
	preview.src = '';
}

export const previewController = () => {
	const imageFile = form.image;
	image.addEventListener('change', async () => {
		if (imageFile.files.length) {
			const src = await toBase64(imageFile.files[0]);
			showPreview(src);
		}
		
	});
};
