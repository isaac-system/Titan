import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, Button } from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { COLORS, icons } from "../constants";
import tempData from "../tempData";

const DAY = [
    {
        id:1,
        day: '일'
    },
    {
        id:2,
        day: '월'
    },
    {
        id:3,
        day: '화'
    },
    {
        id:4,
        day: '수'
    },
    {
        id:5,
        day: '목'
    },{
        id:6,
        day: '금'
    }
    ,{
        id:7,
        day: '토'
    }
]




const SettingRoutine = () => {
    let today = new Date();
    const week = ['일','월','화','수','목','금','토']
    
    const [value, onChangeText] = useState('');
    
    const addTodoList = () => {
        tempData.push(
            {   
            id: Math.random().toString(),
            title: value,
            setTime: {
                time: today.getHours()+':'+ today.getMinutes(),
                day: week[today.getDay()],
                ampm: today.getHours>11 ? '오전' : '오후',
                },
            location: '장소',
            checked: false,
            todos:[]
        },)

    }

    function renderHeader() {
        
        return(
            <View style={{flexDirection: 'row', height: 60,justifyContent: 'center', alignItems: 'center', backgroundColor: '#'}} >
                <TouchableOpacity
                    onPress= {() => navigation.navigate('Home')}
                    style= {{
                        width:46,
                        paddingLeft: 0,
                        justifyContent: "center",
                    }}
                >
                    <Image 
                        source={icons.Back}
                        resizeMode="contain"
                        style={{
                            width: 48,
                            height: 48
                        }}
                    /> 
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
                        <View>

                            <Text>
                                루틴 생성
                            </Text>
                        </View>
                </View>

                <TouchableOpacity
                    style= {{
                        width:46,
                        paddingRight: 0,
                        justifyContent: "center",
                    }}
                >
                    <Image 
                        source={icons.Setting}
                        resizeMode="contain"
                        style={{
                            width: 48,
                            height: 48
                        }}
                    />
                </TouchableOpacity>
            </View>
            
        )
    }

    function TitleInputor() {
            
            
            return (
              <TextInput
                style={{ 
                    height: 38,
                    fontSize: 24,
                    borderWidth: StyleSheet.hairlineWidth,
                    borderColor: COLORS.primary,
                    fontSize: 18,
                    paddingHorizontal:10,
                    backgroundColor: COLORS.white
                }}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder={"제목을 써주세요"}
                
              />
            );
        
    }
    function SettingTime() {
            
        
    }

    function SettingDay() {

        const renderDay = ({ item }) => (
            <View style={{
                paddingHorizontal: 7,
                marginVertical: 10
            }}>
                <TouchableOpacity
                    style={{
                        width:30,
                        height:30,
                        backgroundColor: '#fff',
                        borderRadius: 6,
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 18
                        }}
                    >
                        {item.day}
                    </Text>
                </TouchableOpacity>
            </View>
        )

        return(
        <View>
            <View style={{
                justifyContent: 'center',
                alignItems:'center'
            }}>
                <FlatList 
                    data={DAY} 
                    renderItem={renderDay} 
                    keyExtractor={(item, index) => index.toString()} 
                    horizontal={true}/>
            </View>
        </View>
        
        )
        
    }

    function SettingRepeat() {
        return(
            <View style={{
                flexDirection: 'row',
                marginVertical: 20
                
            }}>
                <View
                    style={{
                        
                        flex: 1
                    }}
                >
                    <Text>
                        몇시 부터 몇시 까지
                    </Text>
                </View>
                
                <View 
                    style={{
                        
                        flex: 1,
                        alignItems: 'flex-end'
                    }}
                >
                    <Text>
                        시간 설정
                    </Text>
                </View>
            </View>
        )
       
    }

    

    function SaveBtn() {
        return(
            <View 
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20    
                }}
            >
                <TouchableOpacity
                    onPress={()=> addTodoList()}
                    style={{
                        width: '100%',
                        padding: 10,
                        backgroundColor: '#b088f9',
                        alignItems: 'center',
                        borderRadius: 10
                    }}
                >
                    <Text
                        style={{
                            letterSpacing: 10,
                            fontSize: 24,
                            color: '#fcfcfc',
                            fontWeight: 'bold'
                        }}
                    >
                        저장
                    </Text>
                </TouchableOpacity>
                
            </View>
        )
    }
    return(
        
        <View style={styles.container}>
            <StatusBar/>
            <View> 
                {renderHeader()}
            </View>
                {TitleInputor()}
                {SettingTime()}
                {SettingDay()}
                {SettingRepeat()}
                {SaveBtn()}
            
        </View>
    )

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(176, 136, 249, 0.1)",
        paddingHorizontal: 12
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 1,
    }
})

export default SettingRoutine;