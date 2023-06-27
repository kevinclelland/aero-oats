export type Categories = 'sveltekit' | 'svelte'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
    photo: any
	user: string
	avatar: any
}

export type Review = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
    photo: any
	user: string
	avatar: any
}