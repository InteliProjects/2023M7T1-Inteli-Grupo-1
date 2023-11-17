import { Text } from './Styles';

// criando contrato do componente Title
export interface TitleProps {
    size: number | 1,
    content?: string,
    color?: string,
    margin?: string,
    textalign?: string,
    weight?: number,
    padding?: string,
    width?: string
}

// Exportando componente implementando TitleProps
export default function Title(props: TitleProps) {

    return (
        <Text 
            size={props.size}
            color={props.color}
            margin={props.margin}
            textalign={props.textalign}
            weight={props.weight}
            width={props.width}
            padding={props.padding}
        >
            {props.content}
        </Text>
    );

} 