import "../css/Loading.css"
export default function Loading(){
	if (typeof(window) === 'undefined'){
		return (
			<h1>Please wait while we connect you</h1>
		)
	}
}