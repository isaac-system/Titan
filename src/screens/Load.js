import { COLORS, icons } from "../constants";
import React , { useState } from "react";
import {SafeAreaView, View, Text, StyleSheet, Image, StatusBar, SectionList} from "react-native";
import { FlatList, TextInput, TouchableOpacity } from "react-native-gesture-handler";

const categoryData = [
    {
        id: 1,
        name: "운동",
    },
    {
        id: 2,
        name: "명상",
    },
    {
        id: 3,
        name: "취미",
    },
    {
        id: 4,
        name: "독서",
    },
    {
        id: 5,
        name: "학습",
    },
    {
        id: 6,
        name: "생활 습관",
    },

]

const subCategoryData = [
    {
        id: 1,
        name: "최신 순" 
    },
    {
        id: 2,
        name: "인기 순" 
    },
    {
        id: 3,
        name: "사용 순" 
    },
]

const DATA = [
        
    {
        id: 1,
        title: '아침루틴',
        setTime: {
            time: '07:00',
            day: '주중',
            ampm: '오전',
        },
        location: '내방',
    },

    {
        id: 2,
        title: '점심루틴',
        setTime: {
            time: '12:00',
            day: '월,화,수',
            ampm: '오전',
        },
        location: '휴게실',
    },
    {
        id: 3,
        title: '운동루틴',
        setTime: {
            time: '07:00',
            day: '월,화,수',
            ampm: '오후',
        },
        location: '헬스장',
    },
    {
        id: 4,
        title: '운동루틴',
        setTime: {
            time: '07:00',
            day: '월,화,수',
            ampm: '오후',
        },
        location: '헬스장',
    },
    
  ];

const Load = () => {

    const [categories, setCategories] = useState(categoryData)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedSubCategory, setSelectedSubCategory] = useState(null)

    const [selectedToggle, setSelectedToggle] = useState(null)
    
    function onSelectToggle(e) {
        {(selectedToggle?.id == e.id)? setSelectedToggle(null) :setSelectedToggle(e)}
    }

    function onSelectCategory(category) {


        setSelectedCategory(category)
    }

    function onSelectSubCategory(subCategory) {


        setSelectedSubCategory(subCategory)
    }

    function renderHeader () {

        return(
            <View>
                <View
                    style={{
                        width: '100%',
                        height: 42,
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width:150,
                            height:30,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderWidth: 1,
                            borderRadius: 15,
                            backgroundColor: '#fff',
                            opacity: 0.4,
                            paddingHorizontal:15
                        }}
                    >
                        <TextInput 
                        placeholder='검색'
                        />
                        <Image
                            source={icons.searchLens}
                            resizeMode = 'contain'
                            style={{
                                width: 24,
                                height: 24
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({item}) => {
            return(
                <TouchableOpacity
                    style={{
                        paddingVertical: 3,
                        paddingHorizontal: 15,
                        backgroundColor: (selectedCategory?.id == item.id) ? '#B088F9' : '#ffffff',
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 8,
                        ...styles.shadow,
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <Text style={{fontSize: 16 , color: (selectedCategory?.id == item.id) ? '#ffffff' : '#000000'}}>
                        {item.name}
                    </Text>

                    
                </TouchableOpacity>
            )
        }
        return(
            <View
                style={{paddingVertical:8 ,paddingHorizontal:4}}
            >

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: 5 }}
                >
                    

                </FlatList>
            </View>
        )
    }

    function renderSubcategory () {
        const renderItem = ({item}) => {
            return(
                <TouchableOpacity
                    style={{
                        paddingVertical: 3,
                        paddingHorizontal: 20,
                        backgroundColor: (selectedSubCategory?.id == item.id) ? '#B088F9' : '#ffffff',
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 20,
                        ...styles.shadow,
                    }}
                    onPress={() => onSelectSubCategory(item)}
                >
                    <Text style={{fontSize: 16 , color: (selectedSubCategory?.id == item.id) ? '#ffffff' : '#000000'}}>
                        {item.name}
                    </Text>

                    
                </TouchableOpacity>
            )
        }
            return(
                <View
                    style={{paddingVertical:8 ,paddingHorizontal:4}}
                >
    
                    <FlatList
                        data={subCategoryData}
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor={item => `${item.id}`}
                        renderItem={renderItem}
                        contentContainerStyle={{ paddingVertical: 5 }}
                    >
                        
    
                    </FlatList>
                </View>
            )
    }


    function renderLoadRoutineList () {

        const renderItem = ({item}) => (
            <View

                style={styles.shadow,{
                    width: '100%',
                    marginVertical:10,
                }}
                
                
            >   
                <View
                    style={{
                        height:35,
                        backgroundColor: COLORS.primary,
                        borderTopRightRadius:10,
                        borderTopLeftRadius:10,
                        flexDirection: 'row',
                        alignItems:'center',
                        paddingHorizontal: 10,
                        justifyContent:"space-between"
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems:'center'
                        }}
                    >
                        <Image 
                            source={icons.user1}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                marginRight:10
                            }}
                        />
                        <Text>
                            이삭토스트
                        </Text>
                    </View>
                    
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems:'center',
                            justifyContent:'space-around'
                        }}
                    >
                        <Image 
                            source={icons.heart}
                            resizeMode='contain'
                            style={{
                                width:16,
                                height:16,
                                
                            }}
                        />
                        <Text>
                            250
                        </Text>
                        <Image 
                            source={icons.accountOutlined}
                            resizeMode='contain'
                            style={{
                                width:16,
                                height:16,
                                
                            }}
                        />
                        <Text>
                            1.5k
                        </Text>
                    </View>
                    
                </View>

                <View
                    // onPress= {() => navigation.navigate('SettingRoutine', item)}
                    style={{
                        height: 80,
                        backgroundColor: '#ffffff',
                        flexDirection: 'row',
                        justifyContent:'center',
                        alignItems:'center',
                        
                        
                    }}
                >   
                    

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
                                    fontSize: 20,
                                    color: '#191919' 
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
                                    {item.setTime.ampm}
                                </Text>
                            </View>
                            
                        </View>
                        <Text
                            style={{
                                fontSize:12,
                                color: '#999999'
                            }}
                        >
                            {item.setTime.day}
                        </Text>
                    </View>
                    

                        
                    <View
                        style={{
                            height:80,
                            width: 90,
                            paddingHorizontal:20,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text 
                            style={{
                                fontSize:20,
                                color:  '#191919' 
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
                                fontSize:20,
                                color:  '#191919' 
                            }}
                        >  
                        {item.title}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            width:40,
                            height: '100%',
                            justifyContent:'center',
                            alignItems:'center',
                        }}
                    >
                        <Image
                            source={icons.downloadList}
                            resizeMode='contain'
                            style={{
                                width:24,
                                height:24
                            }}
                        />
                    </TouchableOpacity>
                        
                </View>
                


                
                {(selectedToggle?.id === item.id) ?
                    <View 
                    style={{
                    width:'100%',
                    backgroundColor:'#f1f1f5',
                    }}
                >
                    <View 
                        style={{
                            flexDirection: 'row',
                            backgroundColor: '#ffffff',
                            width: '100%',
                            height: 50,
                            marginTop: 10,
                            alignItems:'center'
                        }}
                    >
                        <View
                            style={{
                                width:40,
                                height:50,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
            
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                            }}
                        >
                            <View style={{
                                width: 256,
                                height: 20
                            }}>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color:  '#191919'
                                    }}
                                >
                                    asdasd
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            : null    
            }



                <TouchableOpacity
                    onPress={() => onSelectToggle(item)}
                    style={{
                    backgroundColor: '#B088F9',
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
                        source={selectedToggle ? icons.toggleUpBtn : icons.toggleDownBtn}
                        style={{
                            width:24,
                            height:24
                        }}
                    />
                    </View>

                </TouchableOpacity>
                        
            </View>
            
            

                        
        );
                    

        return(
            <FlatList 
                data={DATA}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}

                contentContainerStyle={{
                    paddingBottom: 30
                }}
            />
        )
    }
    return(
        <View
            style={styles.container}
        >
            {renderHeader()}
            {renderMainCategories()}
            {renderSubcategory()}
            {renderLoadRoutineList()}
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
export default Load;