import axios from "axios"

type MinecraftType = {
	identifier: string
	name: string
	icon: string
	homepage: string

	builds: number
	versions: {
		minecraft: number
		project: number
	}
}

export default async function apiGetTypes(): Promise<MinecraftType[]> {
	const { data } = await axios.get<{
		types: Record<string, MinecraftType>
	}>('https://mc.rjns.dev/api/v1/types')

	return Object.values(data.types).map((type) => Object.assign(type, { identifier: type.name.toUpperCase() }))
}