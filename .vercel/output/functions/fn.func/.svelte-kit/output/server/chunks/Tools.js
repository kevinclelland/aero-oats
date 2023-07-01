import { c as create_ssr_component, l as each, e as escape } from './index3.js';
const Tools = create_ssr_component(($$result, $$props, $$bindings, slots) => {
	const listData = [
		{
			avatar: 'YOErFW8AfkI',
			name: 'PTO Points',
			label: 'Calculate PTO points',
			link: 'pto'
		},
		{
			avatar: 'z_X0PxmBuIQ',
			name: 'Time Distance Pace',
			label: 'Calculate running pace, distance or time',
			link: 'tdp'
		},
		{
			avatar: '8vKVlNIbAc4',
			name: 'Countdown',
			label: 'Days til next race',
			link: 'countdown'
		}
	];
	return `<dl class="list-dl">${each(listData, (v) => {
		return `<div><span class="badge-icon p-4 variant-soft-secondary"><i class="fas fa-wrench"></i></span>
            <a href="${
							'/' + escape(v.link, true)
						}"><span class="flex-auto"><dt class="font-bold">${escape(v.name)}</dt>
                <dd class="text-sm opacity-50">${escape(v.label)}</dd>
            </span></a>
            
        
        </div>`;
	})}</dl>`;
});
export { Tools as T };
