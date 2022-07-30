import axios from 'axios'

const get = async (url:string) => {

	try{
		let response = await axios.get(url)
		return response.data
	}
	catch(e) {
		console.log(e)
		return null
	}
}

export default get
