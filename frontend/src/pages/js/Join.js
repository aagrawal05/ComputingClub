import { useEffect } from 'react'

import "../css/Join.css"
import "../../components/js/Loading.js"

export function Join() {
	useEffect(async () => {
		if (localStorage.getItem('user')){
			var data = localStorage.getItem('user')
			await fetch('http://127.0.0.1:5000/api/join/', {
			    method: 'POST',
			    headers: {
			      'Content-Type': 'application/json'
			    },
			    body: JSON.stringify({"username": data.username, 
			    					  "password": data.password })
			})
		}
	}, [])

	return (
		<div className="Join">
			<h1>Welcome, there is no going back</h1>
		</div>
	)
}