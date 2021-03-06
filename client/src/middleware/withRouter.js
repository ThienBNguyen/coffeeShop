import { useLocation, useNavigate, useParams } from 'react-router';
export function withRouter(Child) {
	return (props) => {
		const location = useLocation();
		const navigate = useNavigate();
		return <Child {...props} navigate={'./'} location={'./'} />;
	};
}
