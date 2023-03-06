import axios from "axios";
import { API_URL } from "../constants/CONSTANTS";

export default axios.create({
    baseURL: API_URL,
    headers: {
        'X-Api-key': 'live_V91ZcnQbRFNk6NgNWdRvWW8gSjXnd0ZL4Tdh6AabJBg8U698fGgVI7CSIbEtiH8B'
    }
});