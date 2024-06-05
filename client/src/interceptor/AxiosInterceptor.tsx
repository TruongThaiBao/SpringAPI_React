import axios, { AxiosError } from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function AxiosInterceptor(props: any) {
    let navigate = useNavigate();

    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
            response => response,
            (error: AxiosError<any>) => {
                

                switch (error.response?.status) {
                    case 400:
                        toast.error(error.response?.data.message, { theme: 'colored' });
                        break;
                    case 404:
                        navigate('/not-found');
                        break;
    
                    case 500:
                        navigate('server-error', { state: { error: error.response?.data.message } });
                        break;
                    default:
                        if(error.code === "ERR_NETWORK") {
                            navigate('/not-found');
                        } else {

                            toast.error(error.message, { theme: 'dark' });
                        }
                        break;
                }
                console.log('Interceptor is called');
                return Promise.reject(error);
            }
        );

        // Hàm dọn dẹp để loại bỏ interceptor
        return () => {
            axios.interceptors.response.eject(interceptor);
        };
    }, [navigate]);

    return props.children;
};
