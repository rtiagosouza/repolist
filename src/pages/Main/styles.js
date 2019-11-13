import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient'
import {getStatusBarHeight} from 'react-native-status-bar-height'

export const Container = styled(LinearGradient).attrs({
    colors: ['#8A2BE2', '#FF00FF', '#FF0000','#FFA500'],
    start: {x: 0, y:0},
    end: {x:1, y:1},
})`
    flex: 1;
    padding-top: ${30 + getStatusBarHeight(true)}px;
    flex-direction: column;
`;

export const Title = styled.Text`
    font-size: 32px;
    color: #FFF;
    font-weight: bold;
    padding: 0 20px;
`;

export const Form = styled.View`
    flex-direction: row;
    margin-top: 10;
    padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#999',
})`
    backgroundColor : #FFF;
    flex: 1;
    padding: 12px 15px;
    border-radius: 10px;
    font-size: 16;
    color: #333;
    margin-bottom: 5px;
    border: 2px solid ${props => (props.error ? '#FF7272' : '#FFf')};
`;

export const Submit = styled.TouchableOpacity
`
background: #3CB371;
margin-left: 10px;
justify-content: center;
border-radius: 10px;
padding: 0 14px;
margin-bottom: 5px;
`;

export const List = styled.FlatList.attrs({
    contentContainerStyle: {paddingHorizontal: 20,
    showsVerticalScrollIndicator: false}
})`
    margin-top 20px;
`;

export const TextoBotao = styled.Text`
    background: #3CB371;
    margin-left: 10px;
    border-radius: 10px;
    padding: 0 14px;
`;