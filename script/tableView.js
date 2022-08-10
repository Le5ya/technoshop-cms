import { tableGoods } from './elems.js';
import { currencyFormatRUB } from './utils.js';

const createRow = ({ id, title, category, price }) => {
	tableGoods.insertAdjacentHTML('beforeend', `
				<tr class="table-row table-goods-item" data-id="${id}">
            <td>${id}</td>
            <td>${title}</td>
            <td>${category}</td>
            <td class="text-end">${currencyFormatRUB(price)}</td>
            <td class="d-flex">
              <button class="btn-table btn-delete">
                <svg width="30" height="30">
                  <use xlink:href="#delete" />
                </svg>
              </button>
            </td>
          </tr>
	`)
}

export const tableRender = (goods) => {
	tableGoods.textContent = '';

	goods.forEach(createRow)
}