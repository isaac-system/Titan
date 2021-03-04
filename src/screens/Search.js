import { icons } from "../constants";
import React , { useState } from "react";
import {SafeAreaView, View, Text, StyleSheet, Image, StatusBar} from "react-native";
import { FlatList, TextInput, TouchableOpacity } from "react-native-gesture-handler";

const categoryData = [
    {
        id: 0,
        name: "전체",
    },
    {   
        id: 1,
        name: "생활 습관",
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
        name: "운동",
    },

]

const routineData = [
    {
        id: 1,
        name: "운동",
        categories: [1,0],
        title: '아침루틴',
        mention: '뭐',
        writer: {
            name : "이삭토스트",
            profilePhoto : icons.user1,
        },
        photo: icons.image1,
        heart: '12.8M',
        comment: '4K'
    },
    {
        id: 2,
        name: "운동",
        categories: [2,0],
        title: '아침루틴',
        mention: '어쩌라고',
        writer: {
            name : "김창수",
            profilePhoto : icons.user2,
        },
        photo: icons.image2,
        heart: '250',
        comment: '250'
    },
    {
        id: 3,
        name: "운동",
        categories: [3,0],
        title: '아침루틴',
        mention: '루틴으로 편하게 변하는 인생',
        writer: {
            name : "이삭토스트",
            profilePhoto : icons.user1,
        },
        heart: '250',

    },
    {
        id: 4,
        name: "운동",
        categories: [4,0],
        title: '아침루틴',
        mention: '루틴으로 편하게 변하는 인생',
        writer: {
            name : "이삭토스트",
            profilePhoto : icons.user1,
        },
        heart: '250',

    },
    {
        id: 5,
        name: "운동",
        categories: [5,0],
        title: '아침루틴',
        mention: '루틴으로 편하게 변하는 인생',
        writer: {
            name : "이삭토스트",
            profilePhoto : icons.user1,
        },
        heart: '250',
        comment: '250'
    },
    {
        id: 6,
        name: "운동",
        categories: [6,0],
        title: '아침루틴',
        mention: '루틴으로 편하게 변하는 인생',
        writer: {
            name : "이삭토스트",
            profilePhoto : icons.user1,
        },
        heart: '250',
        comment: '250'
    },
    {
        id: 7,
        name: "운동",
        categories: [7],
        title: '아침루틴',
        mention: '',
        writer: {
            name : "이삭토스트",
            profilePhoto : icons.user1,
        },
        heart: '250',
        comment: '250'
    },

    
]

const Search = () => {

    const [categories, setCategories] = useState(categoryData)
    const [selectedCategory, setSelectedCategory] = useState(categories[0])
    const [routines, setRoutines] =useState(routineData)


    function onSelectCategory(category) {
        let routineList = routineData.filter(a => a.categories.includes(category.id))

        setRoutines(routineList)
        
        setSelectedCategory(category)
    }


    function renderHeader () {

        return(
            <View>
                <View
                    style={{
                        width: '100%',
                        height: 42,
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            width:'100%',
                            height:30,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            opacity: 0.4,
                            paddingHorizontal:15,
                            paddingVertical:3
                        }}
                    >
                        <TextInput 
                        placeholder='검색'
                        style={{
                            backgroundColor:'#000',
                            width:'90%',
                            fontSize:18
                        }}
                        />
                        <Image
                            source={icons.searchLens}
                            resizeMode = 'contain'
                            style={{
                                width: 24,
                                height: 24
                            }}
                        />
                    </View>
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
                />
                    

            </View>
        )
    }

    function renderUserRoutineList() {
        const renderItem = ({item}) => (
            <View
                style={{
                    marginBottom: 10,
                    backgroundColor: '#fff',
                    borderRadius: 10
                    // onPress
                }}
            >
                {/* Image */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems:'center',
                        paddingLeft: 20,
                        paddingRight: 15,
                        paddingVertical: 10
                    }}
                >
                    <Image 
                        source={item.writer.profilePhoto}
                        resizeMode='contain'
                        style={{
                            width: 40,
                            height: 40,
                            marginRight: 16,
                        }}
                    />
                    <View
                        style={{
                            width:205,
                            marginRight:16
                        }}
                    >
                        <Text
                            style={{
                                fontSize:16,
                            }}
                        >
                            {item.writer.name}
                        </Text>
                    </View>
                    <View>
                        <Image 
                            source={icons.setting}
                            resizeMode='contain'
                            style={{
                                width: 24,
                                height: 24,  
                            }}
                        />
                    </View>
                </View>
                

                <View

                    style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        flexDirection: 'row'
                    }}
                >
                    <Text
                        style={{
                            fontSize:16,
                            fontWeight: 'bold',
                        }}
                    >
                        {item.title}
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            marginHorizontal: 8,
                        }}
                    >
                        |
                    </Text>
                    <Text
                        style={{
                            fontSize:16,
                            color:'#999999'
                        }}
                    >
                        {item.name}
                    </Text>
                </View>
                <View
                     style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                    }}
                >
                    <Text>
                        {item.mention}
                    </Text>
                </View>
                <View>

                </View>
                <Image
                    source={item.photo}
                    style={{
                        borderRadius:10
                    }}
                >
                </Image>
                <View
                    style={{
                        flexDirection:'row',
                        paddingHorizontal:16,
                        paddingVertical:7,
                        justifyContent:'space-between'
                    }}
                >
                    <View
                        style={{
                            flexDirection:'row',
                            alignItems:'center',
                            marginRight: 20
                        }}
                    >
                        <Image 
                            source={icons.heart}
                            resizeMode='contain'
                            style={{
                                width: 24,
                                height: 24,
                                marginRight: 4
                            }}
                        />
                        <Text
                            style={{
                                marginRight:10
                            }}
                        >
                            {item.heart}
                        </Text>
                        <Image 
                            source={icons.comment}
                            resizeMode='contain'
                            style={{
                                width: 24,
                                height: 24,
                                marginRight: 4
                            }}
                        />
                        <Text
                            style={{
                                marginRight:12
                            }}
                        >
                            {item.comment}
                        </Text>
                        
                    </View>
                    
                        
                    
                    <View>
                        <Image 
                            source={icons.downloadList}
                            resizeMode='contain'
                            style={{
                                width: 24,
                                height: 24
                            }}
                        />
                    </View>
                </View>
            </View>
        )

        return (
            <FlatList 
                data={routines}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingBottom: 10
                }}
                extraData={routines}
            />
        )
    }

     return (
        <View
            style={styles.container}
        >
            <StatusBar/>
            {renderHeader()}
            {renderMainCategories()}
            {renderUserRoutineList()}
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
export default Search;