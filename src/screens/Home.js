import { COLORS, icons } from "../constants";
import React from "react";
import { SafeAreaView, View, Text, StyleSheet,  Image,  StatusBar, Keyboard } from "react-native";
import { useState } from "react";
import { FlatList,TouchableOpacity} from "react-native-gesture-handler";
import TodoInsert from '../components/todoInsert';
import TodoList from '../components/todoList';
import tempData from "../tempData";





const Home = () => {
    
    
    
      
    // todos: {id: Number, title: String, location: String, checked: Boolean ,setTime: {time: number, day: String, ampm: Boolean}}
    // id: uuid
    const [header, setHeader] = useState(tempData);

    const onAddTodo = (text,id) => {
        let copyb = header.filter( a => a.id == id )
        copyb.map(a => a.todos.push({id: Math.random().toString(), text: text, checked: false},))
        setHeader(header)

        Keyboard.dismiss();
    }   


    
    const onClickMainCheckBox = (id) => {
       setHeader(
           header.map(todo => 
                todo.id === id ? {...todo, checked : !todo.checked} : todo,
            )
       )
    }
    
    const [selectedToggle, setSelectedToggle] = useState(null)

    function onSelectToggle(e) {
        {(selectedToggle?.id == e.id)? setSelectedToggle(null) :setSelectedToggle(e)}
    }

    function renderHeader() {
            
        return (
            <View
                style={styles.homeHeader}
            >
                <View>
                    <Text
                        style={{
                            fontSize: 12
                        }}
                    >
                        다음 알림
                    </Text>
                    <Text
                        style={{
                            fontSize: 16
                        }}
                    > 
                    {/* To do */}
                        16시 24분
                    </Text>
                </View>

                <View>
                    <View
                        style ={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <View>
                            <Image 
                                source = {icons.sunny}
                                resizeMode = "contain"
                                style ={{
                                    width: 24,
                                    height: 24,
                                }}
                            />
                        </View>
                        <View>
                            <Text
                                style ={{
                                    fontSize: 24
                                }}
                            >
                                21
                            </Text>
                        </View>
                        <Image 
                            source= {icons.celsius}
                            resizeMode = "contain"
                                style ={{
                                    width: 11,
                                    height: 24,
                                }}
                        />
                    </View>
                    <View>
                        <Text>
                            {/* To do */}
                            용산
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderProfile() {
        return(
            <View style={{flexDirection: "row", alignItems:'center'}}>
                <TouchableOpacity 
                    style={{
                        width: 70,
                        height: 70,
                        borderRadius: 35,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#fff",
                        flexDirection: "row",
                        marginLeft: 10,
                        marginVertical: 15
                    }}>
                    <Image
                    // to do
                        // source={icons.MData}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30,
                        }}
                />
                
                </TouchableOpacity>

                <TouchableOpacity style={{
                    marginLeft: 30
                }}>
                    <Text style={{fontSize: 24}}>
                        {/* To do */}
                        Wellcome, Isaac
                    </Text>
                </TouchableOpacity>
            </View>
            
        )
    }

    function renderRoutineList() {
        
        const renderItem = ({ item, index }) => (
            
            <View
                style={{
                    width: '100%',
                    marginVertical:10,
                }}
            >
                <View
                    style={{
                        height: 80,
                        backgroundColor: '#ffffff',
                        flexDirection: 'row',
                        borderTopRightRadius:10,
                        borderTopLeftRadius:10,
                    }}
                >   
                    <TouchableOpacity
                        style={{
                            height: 80,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress= {() => onClickMainCheckBox(item.id)}
                    >
                        <Image 
                            source = { (item.checked) ? icons.checkBoxChecked : icons.checkBoxGray}
                            resizeMode = 'contain'
                            style ={{
                                height: 24,
                                width: 24
                            }}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 80,
                            width: 80,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <View style={{
                            flexDirection: 'column',
                            marginRight: 2,
                            justifyContent: 'center',
                            alignItems: 'center'
                            
                        }}
                            >
                            <Text 
                                style={{
                                    fontSize:24,
                                    color: item.checked ? '#191919' : '#999999'
                                }}
                            >  
                            {item.setTime.time}
                            </Text>
                            
                            <View>
                                <Text 
                                    style={{
                                        fontSize: 12,
                                        color: '#999999'
                                    }}
                                >  
                                {item.setTime.day}
                                </Text>
                            </View>
                            
                        </View>
                        <Text
                            style={{
                                fontSize:12,
                                color: '#999999'
                            }}
                        >  
                        {item.setTime.ampm}
                        </Text>
                    </View>
                    

                        
                    <View
                        style={{
                            height:80,
                            width: 90,
                            marginLeft: 15,
                            marginRight: 14,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text 
                            style={{
                                fontSize:24,
                                color: item.checked ? '#191919' : '#999999'
                            }}
                        >  
                            {item.location}
                        </Text>
                    </View>
                        
                    <View
                        style={{
                            height:80,
                            width: 90,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text 
                            style={{
                                fontSize:24,
                                color: item.checked ? '#191919' : '#999999'
                            }}
                        >  
                            {item.title}
                        </Text>
                    </View>
                        
                </View>

                {/* {
                (selectedToggle?.id == item.id) ?  */}
                <View
                    style={{
                    width:'100%',
                    backgroundColor:'#f1f1f5',
                    }}
                >
                    <TodoList item={item}/>
                    <TodoInsert item={item.id} onAddTodo={(text) => onAddTodo( text , item.id )}/>
                </View>
                {/* : null
                } */}
                
                <TouchableOpacity
                    onPress={() => onSelectToggle(item)}
                    style={{
                    backgroundColor: item.checked ? COLORS.primary : '#DDDDDD',
                    borderBottomLeftRadius:10,
                    borderBottomRightRadius:10,
                    ...styles.shadow
                    }}
                >
                    <View
                    style={{
                    width:'100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}
                    >
                        <Image 
                        source={(selectedToggle?.id == item.id) ? icons.toggleUpBtn : icons.toggleDownBtn}
                        style={{
                            width:24,
                            height:24
                        }}
                        />
                        
                    </View>

                </TouchableOpacity>
            </View>

            
        );
               
        return (
            <View>
                <FlatList 
                    data={header}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                    paddingBottom: 170
                    
                }}
                />
            </View>
        )
        
    }



    return (
        <SafeAreaView
            style={styles.container}
        >
            <StatusBar/>
            {renderHeader()}
            {renderProfile()}
            {renderRoutineList()}
            
        </SafeAreaView>
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
    },
    homeHeader: {
        flexDirection: 'row',
        height: 46,
        marginTop: 10,
        justifyContent: 'space-between'
    }
})

export default Home;