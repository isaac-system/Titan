import { COLORS, icons } from "../constants";
import React from "react";
import { View, Text, Image } from "react-native";
import { FlatList, TextInput, TouchableOpacity} from "react-native-gesture-handler";
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { useState } from "react";
import Animated from "react-native-reanimated";

const TodoList = ( {item} ) => {
    const [text, setText] = useState(item.text);
    const [routines, setRoutines] = useState(item.todos)

    const onRemove = (index) => {
        routines.splice(index, 1)
    };

    const onSubCheckBox = (id) => {
        setRoutines (routines.map(a => a.id === id ? {...a, checked : !a.checked} : a))
    }

    const todoInputHandler = (val) => {
        setText(val);
    }

    const rightActions = (drageX, index) => {
        return (
            <TouchableOpacity onPress={() => onRemove(index)}>
                <Animated.View style={{ marginTop:10,width:50,height:50, backgroundColor:'#ff2e63',justifyContent: 'center', alignItems:'center'}}>
                    <Animated.Text style={{ fontWeight: '800', color: COLORS.white }}>
                        삭제
                    </Animated.Text>
                </Animated.View>
            </TouchableOpacity>
        )
    }


    const renderItem = ({item , index}) => {
        return(
            <Swipeable renderRightActions={(_, drageX) => rightActions(drageX, index)}>
            <View 
                style={{
                    flexDirection: 'row',
                    backgroundColor: '#ffffff',
                    width: '100%',
                    height: 50,
                    marginTop: 10,
                    alignItems:'center',
                }}
            >
                
                <TouchableOpacity
                    onPress={() => {onSubCheckBox(item.id)}}
                    style={{
                        width:40,
                        height:50,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                        <Image
                            source={item.checked ? icons.checkBoxCheckedOutline : icons.checkBox}
                            resizeMode='contain'
                            style={{
                                width:24,
                                height:24
                            }}
                        />
                </TouchableOpacity>
                <View
                    style={{
                        justifyContent: 'center',
                    }}
                >
                    <View 
                        style={{
                        height: 24,
                        }}
                    >
                        <Text
                            onChangeText={todoInputHandler}
                            style={{
                                width:256,
                                height:21,
                                color: item.checked ? '#999999' : '#191919',
                                textDecorationLine: item.checked ? "line-through" : "none"
                            }}
                        >
                            {item.text}
                        </Text>
                    </View>
                </View>
                
            </View>
            </Swipeable>
        )
    }   


    return(
        <View>
            <FlatList 
            data = {routines}
            renderItem = {renderItem}
            keyExtractor= {item => item.id}
            extraData= {item.text}
            />
        </View>
    )

    
         
}

export default TodoList;