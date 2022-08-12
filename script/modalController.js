import { form } from "./elems.js";
import { hidePreview } from './previewController.js';
import { fillingForm } from './formController.js';
const openModal = () => {
	if (id) {
		fillingForm(id);
	} 
	modal.classList.add('d-block');	

};
export const closeModal = ()  =>{
	modal.classList.remove('d-block');
	form.reset();
	form.identificator.value = '';
	form.imagesave.value = '';
	hidePreview();
};


export const modalController = ({
	btn = modalBtn,
	delegation
}) => {
	if (btn) {
		btn.addEventListener('click', () => {
			modalTitle.textContent = 'Добавить новый товар';
			modalSubmitBtn.textContent = 'Добавить товар';
			openModal();
		});
	}
	if (delegation) {
		delegation.parent.add('click', ({ target }) => {
			const goodsRow = target.closest(delegation.target);
			const targetExclude = target.closest(delegation.targetExclude);
			if (goodsRow && !targetExclude) {
				modalTitle.textContent = `Изменить товар #${goodsRow.dataset.id}`;
				modalSubmitBtn.textContent = 'Изменить товар';
				openModal(goodsRow.dataset.id)
			}
		})
	}
	modal.addEventListener('click', ({ target }) => {
		if (target === modal || target.classList.contains('btn-close')) {
			closeModal();
		}
	})
};