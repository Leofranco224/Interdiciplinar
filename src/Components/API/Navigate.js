import { useNavigate } from "react-router-dom";

export default function Navigate(url) {
    const navigate = useNavigate();
    navigate(url)
}