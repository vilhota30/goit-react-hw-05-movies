import {Vortex} from 'react-loader-spinner';
import {LoaderStyled} from './Loader.styled';

const Loader = () => {

    return (
        <LoaderStyled>
            <Vortex
               visible={true}
               height="200"
               width="200"
               ariaLabel="vortex-loading"
               wrapperStyle={{}}
               wrapperClass="vortex-wrapper"
               colors={['blue', 'white', 'yellow', 'orange']}
            />
        </LoaderStyled>
    );
};
export default Loader;