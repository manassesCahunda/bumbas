import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'

import PropTypes from 'prop-types';


import { Container , TInput} from './styles';

const Input =  ({style, icon ,...rest}) => {
    return (
    <Container style={style}>
        {
            icon && <Icon name={icon} size={20} color="rgba(255,255,255,0.5)"/>
        }
        <TInput {...rest} />
    </Container>
    );
};
Input.propTypes={
    icon:PropTypes.string,
    style : PropTypes.oneOfType([PropTypes.object,PropTypes.array])
};
Input.defaultProps ={
    icon:null,
    style :{},
};
export default Input;