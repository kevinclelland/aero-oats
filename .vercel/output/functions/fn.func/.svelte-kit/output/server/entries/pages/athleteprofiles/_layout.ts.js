const movies = [
	{
		title: 'Lionel Sanders',
		id: 'lionel-sanders',
		avatar:
			'https://content.protriathletes.org/content/images/2023/03/2731d991-06b4-47d9-8f7c-fa18ee7f48e7-w300.webp',
		overview:
			'Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.',
		poster_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/294880035_5172248722874329_4436444909490028853_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFB6ofQwr0MgRBwXhTIspv2NmTV0cp6DMM2ZNXRynoMw-D_OcN9HzhxNYhMd52XUz4&_nc_ohc=owBjFKGZEkwAX9k6EEj&_nc_oc=AQkYNR3lhiiJdt2_HZoCp_i9hcB9grtYYgWefVAG9oRVNKi2K-9ezBcPmGOlOF4qRyQ&_nc_ht=scontent.fdur5-1.fna&oh=00_AfCFFSOTcT1la2V-TMEcTewnVyToPKehddqAtvOzmIi3nw&oe=649CA627',
		backdrop_path:
			'https://protriathletes.org/wp-content/uploads/2022/04/oceanside-featured-soj-jibowu-1024x576.jpg',
		release_date: '1977-05-25',
		vote_average: 8.2,
		youtube: 'https://www.youtube.com/embed/CJ3CINWK5gU'
	},
	{
		title: 'Kristian Blummenfelt',
		id: 'kristian-blummenfelt',
		avatar:
			'https://content.protriathletes.org/content/images/2023/05/de470021-5e6d-4dc6-a008-7060dc46650b-w300.webp',
		overview:
			'Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.',
		poster_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/279343813_4949797188452818_3326874026854870032_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHsGQ6-9rdec43rOPwDSiIye6P2gjLzn2J7o_aCMvOfYifXcqChPmwHWF9yEmfwRHE&_nc_ohc=pfh3Kxh0ZSkAX_dasft&_nc_oc=AQnfSeXjaUm5kHyT9mOmK4p3rHc_uUdCpppR_kYxqNKxoRyeC9owfLEri4l0TLVq7l4&_nc_ht=scontent.fdur5-1.fna&oh=00_AfCCJKPs3QQ3xSM7xEQP_NLNWao9SZQZADmdAe-dXxFrzw&oe=649D866F',
		backdrop_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/345435157_600501415349770_854797507748319780_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEv4vUg1soFVzshQa25lov41VELWHXoxgrVUQtYdejGCkUs7lZYwT0cAqRgR3pq-aA&_nc_ohc=4mUODJomGrkAX_KsurA&_nc_ht=scontent.fdur5-1.fna&oh=00_AfD6cCRbRs-4WP0EYUWA2Sv-tLtKkg8M7Wm_TdX-4yCR6g&oe=649D828C',
		release_date: '2015-12-15',
		vote_average: 7.3,
		youtube: 'https://www.youtube.com/embed/iCNKUmcuTU8'
	},
	{
		title: 'Joe Skipper',
		id: 'joe-skipper',
		avatar:
			'https://content.protriathletes.org/content/images/2023/03/efa7f753-6a3d-4027-b118-b066f2377493-w300.webp',
		overview:
			'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.',
		poster_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/342177039_1616463535534214_7359716525318702734_n.png?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGGVlwlj_HYth9sGfC2UdbYcvju0E4tn5xy-O7QTi2fnEqte8sg_7k4lxTXxiiH4d4&_nc_ohc=2y3J0I7zyIIAX9eXX_A&_nc_ht=scontent.fdur5-1.fna&oh=00_AfAkGEATijBwSSxqk8vFY_HdMxiLG1iFDu9Vl0rWqXJUbg&oe=649C720E',
		backdrop_path:
			'http://i0.wp.com/joeskipper.co.uk/wp-content/uploads/2019/05/E28273E5-3734-4408-B217-2D3270BDEB9A.jpeg?w=1200',
		release_date: '2017-12-13',
		vote_average: 6.9,
		youtube: 'https://www.youtube.com/embed/aRYjAsjaDCE'
	},
	{
		title: 'Paula Findlay',
		id: 'paula-findlay',
		avatar:
			'https://content.protriathletes.org/content/images/2023/05/427e6abb-0bb0-4135-bf79-c00e422ae11d-w300.webp',
		overview:
			'The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.',
		poster_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/320255645_704982581145287_7795981149680293642_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHBPCJ2rTfb6h0nVyFW3GkInIIz_tEk5kGcgjP-0STmQd71s6MzubVLmxwdEBI12mU&_nc_ohc=RZ207mMTQC8AX97dw1T&_nc_ht=scontent.fdur5-1.fna&oh=00_AfD5QR7B9sQP3hMxWLh6Gtfgf9xTqSqHKgSwKl8vcdJh6g&oe=649D2E4F',
		backdrop_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/341100540_1285637852335008_1536863248666157435_n.png?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGZVcjrvvwdeE1gxWAFEBhCaPl4qSWwQMto-XipJbBAyzszMmwypxGk2ncg_WXobQM&_nc_ohc=aUXmtTArwpoAX8Tce5j&_nc_ht=scontent.fdur5-1.fna&oh=00_AfChVMNJwhyy3DhbXcpQhvfc_5XEzm8U6YcuGNLfBblbgA&oe=649C47F1',
		release_date: '2019-12-18',
		vote_average: 6.4,
		youtube: 'https://www.youtube.com/embed/DDkN6dg_zHg'
	},
	{
		title: 'Anne Haug',
		id: 'anne-haug',
		avatar:
			'https://content.protriathletes.org/content/images/2023/05/6ba37123-6332-46eb-97de-3c13f30d19cb-w300.webp',
		overview:
			'Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.',
		poster_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/346259340_958217325373812_7736304159339033482_n.png?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGjrmIEN0DVNFHroNMmkwUuCgtbf8zZA_kKC1t_zNkD-UTY-8ky_2Nuh1aTl7lWSF4&_nc_ohc=GL-hnrhmuOoAX8umA9S&_nc_oc=AQl7qACLc6Xl5iSdmR42IYWEoM0r3SOw7Rj_uIQlItCeUcJ1_b3-RYkA6ZWhc5H7eLQ&_nc_ht=scontent.fdur5-1.fna&oh=00_AfDpSPQqrjpXKdXa3XfjGfxDDrI3WMsuEP56EYafzHu8Mw&oe=649CBF55',
		backdrop_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/345443259_762984748624349_469333121591945386_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHKd51TUBJcbkYzkUz_ostIyARYnnxEQgjIBFiefERCCA43ZWME85rr8Zjbakg77EM&_nc_ohc=6yr5gPOgrCgAX8pyVh5&_nc_ht=scontent.fdur5-1.fna&oh=00_AfCyzQjoCWXABPM1oEq8v83XCbDa71p49gwqZG5427VBKA&oe=649DAEA7',
		release_date: '2018-05-15',
		vote_average: 6.6,
		youtube: 'https://www.youtube.com/embed/FXhVAHBEi3c'
	},
	{
		title: 'Gustav Iden',
		id: 'gustav-iden',
		avatar:
			'https://content.protriathletes.org/content/images/2023/03/91dc01ce-696c-4840-b54c-67c0186924f6-w300.webp',
		overview:
			'A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.',
		poster_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/320735843_5555362121229058_9011442434835801379_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeESoIhXDKcV2m0LbwtFKAD2L6lZZCAJQjovqVlkIAlCOmb0k6cNq5Rzvl4gor0T9As&_nc_ohc=hXxsGWiqqS0AX-8PIRI&_nc_ht=scontent.fdur5-1.fna&oh=00_AfAutQ7SG3MEqDXqus6Mz9JF7m_sptFJ1lp48R2DMMXskg&oe=649DF6EA',
		backdrop_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/316058768_5505735042859027_905356407298287839_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGiMMyXRd_YtBRTr08CssjHL9NE7kR3UgMv00TuRHdSA8ycTyfhEC1qS-FeQhsgzwQ&_nc_ohc=9EgUo5dKlkIAX9sSxhQ&_nc_ht=scontent.fdur5-1.fna&oh=00_AfDUWQxRJZaOKpOeBtC2YodzSqDi3_9Fs4BMWopke9NW-Q&oe=649D1A39',
		release_date: '2016-12-14',
		vote_average: 7.5,
		youtube: 'https://www.youtube.com/embed/GrzDoSwg198'
	},
	{
		title: 'Magnus Ditlev',
		id: 'magnus-ditlev',
		avatar:
			'https://content.protriathletes.org/content/images/2023/05/95a00981-61ff-4356-bb81-2874a89a0c00-w300.webp',
		overview:
			'Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.',
		poster_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/309560667_5361411220624744_6467406282152881773_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHiHAggI1rVvjCCHoCFI64z1WEMTMCyRiTVYQxMwLJGJHDzwuj9ESQwl6NmEdCUzDk&_nc_ohc=S98q1VrRzCsAX86WLOu&_nc_ht=scontent.fdur5-1.fna&oh=00_AfB-cqHK_0ZFIkPBi9d8qo_Ndaa-I4G5eIGlzZEXEFns-w&oe=649C4DE2',
		backdrop_path:
			'https://protriathletes.org/wp-content/uploads/2022/03/pto-weapon-of-choice-magnus-ditlev-1024x576.jpg',
		release_date: '1999-05-19',
		vote_average: 6.5,
		youtube: 'https://www.youtube.com/embed/H-exNl-KRXQ'
	},
	{
		title: 'Sam Laidlow',
		id: 'sam-laidlow',
		avatar:
			'https://content.protriathletes.org/content/images/2023/03/ceee36f5-6532-4299-a0c8-3cba69d69429-w300.webp',
		overview:
			'The evil Darth Sidious enacts his final plan for unlimited power -- and the heroic Jedi Anakin Skywalker must choose a side.',
		poster_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/328270926_5880471775363840_4229580448074002966_n.png?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGpzbjyMt3VFcM-4qD9Fa9KfDYVRKJKvz98NhVEokq_PzKEfwDN_wGzy79P-z07Ztk&_nc_ohc=6s0wDFq7IToAX_k0r6N&_nc_ht=scontent.fdur5-1.fna&oh=00_AfCMqskD9As1QLok5gkXtxBUlPPVmMqzJCV2b6SmSWs71w&oe=649C893E',
		backdrop_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/347127333_557818199831059_6166778578460821952_n.png?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHtu-oMi7WFM4MK_Nmph4MmDX-hTxxqzHsNf6FPHGrMe91sLQ-QN2-_EisGWa2BrzA&_nc_ohc=ojtQ9KUczi8AX8ThC7Q&_nc_ht=scontent.fdur5-1.fna&oh=00_AfBg0OrffmKKg7ZUi-hCA8rVqqWV1LEBz76qHPhTjbUcFg&oe=649D6314',
		release_date: '2005-05-17',
		vote_average: 7.4,
		youtube: 'https://www.youtube.com/embed/CTLRmxW64so'
	},
	{
		title: 'Ashleigh Gentle',
		id: 'ashleigh-gentle',
		avatar:
			'https://content.protriathletes.org/content/images/2023/05/dd4130db-bbbb-41c4-a125-07bd10a430ac-w300.webp',
		overview:
			'Following an assassination attempt on Senator Padmé Amidala, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi investigate a mysterious plot that could change the galaxy forever.',
		poster_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/305020382_5286795471419653_5433528643295911443_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGdkB_NvtgoMNxe6nPxFiBPN3BGjE0tNpY3cEaMTS02lscdD6QpGuWUX8hHLMAkVBg&_nc_ohc=uxkKr39QhF0AX_-xzGl&_nc_ht=scontent.fdur5-1.fna&oh=00_AfDXEPca585bs4HcD222CH2mK-54yrIjFrK9hW7yHG3mIw&oe=649D322C',
		backdrop_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/295458004_5175471529218715_8088318216613595715_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFdvBKVBrZjceQfqbO0OgvGCZLc_auZiiIJktz9q5mKIqy-b8FbMXoexRAcDCPyPaw&_nc_ohc=tGuZIntn3mgAX_K10vw&_nc_ht=scontent.fdur5-1.fna&oh=00_AfA9uyKxgKYNw_S1Rjg6afnjnk9E46VRYzoXpQ7p1riQcA&oe=649CF29D',
		release_date: '2002-05-15',
		vote_average: 6.5,
		youtube: 'https://www.youtube.com/embed/y67daxfIFf4'
	},
	{
		title: 'Lucy Charles-Barclay',
		id: 'lucy-charles-barclay',
		avatar:
			'https://content.protriathletes.org/content/images/2023/05/31ed8c21-2d5f-45ae-8b97-5e109be0228f-w300.webp',
		overview:
			'The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.',
		poster_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/311380397_5400354623397070_588469290120281796_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEtJbVrzyA_k4vJ1mve_qrEnRCiYE2Hq_ydEKJgTYer_ED5ajhRUvG2oErdBpsqNnQ&_nc_ohc=9wJrPtVZyLQAX8spWD_&_nc_ht=scontent.fdur5-1.fna&oh=00_AfALzetP7QGFLL7UeJcFZWUWOvu9nzyM-EjvVHF_UURBVA&oe=649CE6FB',
		backdrop_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/345612931_761326722198123_3534925969486180778_n.png?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFs7LYRRe3VF0V52Hq_35En_m7FxbToZeH-bsXFtOhl4b-QvBrdzU1gkyuB80WKhxA&_nc_ohc=jQcv0LOMLJEAX8qet2p&_nc_ht=scontent.fdur5-1.fna&oh=00_AfCXgdwcQLNvTVYmxNJo907dBxXBFS4YHtV5W5SQwcSHug&oe=649D49A3',
		release_date: '1980-05-20',
		vote_average: 8.4,
		youtube: 'https://www.youtube.com/embed/Fqd3v8lg1II'
	},
	{
		title: 'Taylor Knibb',
		id: 'taylor-knibb',
		avatar:
			'https://content.protriathletes.org/content/images/2023/03/5a9de8a7-3877-44bd-953b-361992721dbd-w300.webp',
		overview:
			'Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.',
		poster_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/316238396_5505624012870130_1439649704083721266_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHt_wD6FEiOxveTPevVTGdsyl3_jfsmkBTKXf-N-yaQFE-D6Kpm4eJDZ1o0dvq6RHU&_nc_ohc=5B2XBMWJ0tcAX_SJhQE&_nc_ht=scontent.fdur5-1.fna&oh=00_AfB4CLWyt2F0s1maxnOqr6KOf42mlGfLYlw43KXJymB2lA&oe=649DCEF0',
		backdrop_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/307180667_5330872570345276_7193398878947175178_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE5InEN3uBuOPg3moh2ZAdCkZ22hlxuItmRnbaGXG4i2e1KvCm9RgRo7IZm14Ud-nE&_nc_ohc=Ck6eBZMToOcAX9p1Xln&_nc_ht=scontent.fdur5-1.fna&oh=00_AfCAk42nAVbZSXXnQLmR-kJNp_SuLo9V-qpdCk0l8jpROQ&oe=649D0F5A',
		release_date: '1983-05-25',
		vote_average: 7.9,
		youtube: 'https://www.youtube.com/embed/S3xo237JM5M'
	},
	{
		title: 'Emma Pallant-Browne',
		id: 'emma-pallant-browne',
		avatar:
			'https://content.protriathletes.org/content/images/2023/05/5ad53c5c-b684-42cb-8c49-f0aa8d910b42-w300.webp',
		overview:
			'Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, while the Emperor seeks to destroy the Rebellion once and for all with a second dreaded Death Star.',
		poster_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/320147562_711237653749838_2141418600128011058_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHLK4qNJW2w_0-_6Yg4H74eoGJdLOkvELugYl0s6S8Qu5yonOYIafwRXOqB_OYSLVU&_nc_ohc=_DDELZETI3oAX_f6xmK&_nc_ht=scontent.fdur5-1.fna&oh=00_AfBKQGRlkEWAkCzhm8juhlDmd1TNlHiQdPkc_IR8UhHZ9g&oe=649D6BB4',
		backdrop_path:
			'https://scontent.fdur5-1.fna.fbcdn.net/v/t39.30808-6/349181576_1269661670301626_7404767872518949436_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeF5b-TmxZg-oabDOyRX__hXIYp3VVMpnk8hindVUymeT_DW_OiH68d92DUA1ow6lKI&_nc_ohc=_66KGVuxtJkAX_uOMnn&_nc_ht=scontent.fdur5-1.fna&oh=00_AfBHyLRpQDmzfT3Qazdg57VjuadP7gopSAfrE-R6EJSv_Q&oe=649D3689',
		release_date: '1983-05-25',
		vote_average: 7.9,
		youtube: 'https://www.youtube.com/embed/4V8zhIlmli8'
	}
];
async function load() {
	return { movies };
}
export { load };
