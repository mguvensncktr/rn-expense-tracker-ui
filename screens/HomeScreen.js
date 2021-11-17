import React, { useState, useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, FlatList, Animated } from 'react-native'

//constans
import { icons, FONTS, SIZES, COLORS } from '../constants'

const HomeScreen = () => {

    const confirmStatus = "C"
    const pendingStatus = "P"

    let categoriesData = [
        {
            id: 1,
            name: "Education",
            icon: icons.education,
            color: COLORS.yellow,
            expenses: [
                {
                    id: 1,
                    title: "Tuition Fee",
                    description: "Tuition fee",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 100.00,
                    status: pendingStatus
                },
                {
                    id: 2,
                    title: "Arduino",
                    description: "Hardward",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 30.00,
                    status: pendingStatus
                },
                {
                    id: 3,
                    title: "Javascript Books",
                    description: "Javascript books",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 20.00,
                    status: confirmStatus
                },
                {
                    id: 4,
                    title: "PHP Books",
                    description: "PHP books",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 20.00,
                    status: confirmStatus
                }
            ],
        },
        {
            id: 2,
            name: "Nutrition",
            icon: icons.food,
            color: COLORS.lightBlue,
            expenses: [
                {
                    id: 5,
                    title: "Vitamins",
                    description: "Vitamin",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 25.00,
                    status: pendingStatus,
                },

                {
                    id: 6,
                    title: "Protein powder",
                    description: "Protein",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 50.00,
                    status: confirmStatus,
                },

            ],
        },
        {
            id: 3,
            name: "Child",
            icon: icons.baby_car,
            color: COLORS.darkgreen,
            expenses: [
                {
                    id: 7,
                    title: "Toys",
                    description: "toys",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 25.00,
                    status: confirmStatus,
                },
                {
                    id: 8,
                    title: "Baby Car Seat",
                    description: "Baby Car Seat",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 9,
                    title: "Pampers",
                    description: "Pampers",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 100.00,
                    status: pendingStatus,
                },
                {
                    id: 10,
                    title: "Baby T-Shirt",
                    description: "T-Shirt",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 20.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 4,
            name: "Beauty & Care",
            icon: icons.healthcare,
            color: COLORS.peach,
            expenses: [
                {
                    id: 11,
                    title: "Skin Care product",
                    description: "skin care",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 10.00,
                    status: pendingStatus,
                },
                {
                    id: 12,
                    title: "Lotion",
                    description: "Lotion",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 50.00,
                    status: confirmStatus,
                },
                {
                    id: 13,
                    title: "Face Mask",
                    description: "Face Mask",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 50.00,
                    status: pendingStatus,
                },
                {
                    id: 14,
                    title: "Sunscreen cream",
                    description: "Sunscreen cream",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 50.00,
                    status: pendingStatus,
                },
            ],
        },
        {
            id: 5,
            name: "Sports",
            icon: icons.sports_icon,
            color: COLORS.purple,
            expenses: [
                {
                    id: 15,
                    title: "Gym Membership",
                    description: "Monthly Fee",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 45.00,
                    status: pendingStatus,
                },
                {
                    id: 16,
                    title: "Gloves",
                    description: "Gym Equipment",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 15.00,
                    status: confirmStatus,
                },
            ],
        },
        {
            id: 6,
            name: "Clothing",
            icon: icons.cloth_icon,
            color: COLORS.red,
            expenses: [
                {
                    id: 17,
                    title: "T-Shirt",
                    description: "Plain Color T-Shirt",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 20.00,
                    status: pendingStatus,
                },
                {
                    id: 18,
                    title: "Jeans",
                    description: "Blue Jeans",
                    location: "498-300 NW 59th Ct, Miami",
                    total: 50.00,
                    status: confirmStatus,
                },
            ],
        }
    ]

    const categoryListValue = useRef(new Animated.Value(110)).current;

    const [categories, setCategories] = React.useState(categoriesData)
    const [viewMode, setViewMode] = useState("chart");
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [showMoreToggle, setShowMoreToggle] = React.useState(false)

    function renderNavBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.padding,
                    backgroundColor: COLORS.white,
                    height: 60,
                    alignItems: 'flex-end'
                }}
            >
                <TouchableOpacity
                    onPress={() => console.log("Back pressed")}
                >
                    <Image
                        source={icons.back_arrow}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log("More pressed")}
                >
                    <Image
                        source={icons.more}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.primary
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderHeader() {
        return (
            <View
                style={{
                    backgroundColor: COLORS.white,
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.padding,
                }}>
                <View>
                    <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>My Expenses</Text>
                    <Text style={{ color: COLORS.darkgray, ...FONTS.h3 }}>Summary (private)</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            backgroundColor: COLORS.lightGray,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={icons.calendar}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.lightBlue
                            }}
                        />
                    </View>
                    <View style={{ marginLeft: SIZES.radius }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.primary }}>17 Nov, 2021</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>18% more than last month</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderCategoryHeader() {
        return (
            <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.padding, marginTop: SIZES.radius, justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                    <Text style={{ ...FONTS.h3, color: COLORS.primary }}>CATEGORIES</Text>
                    <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>{categories.length} Total</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: viewMode == "chart" ? COLORS.secondary : null,
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => setViewMode("chart")}
                    >
                        <Image
                            source={icons.chart}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 40,
                            height: 40,
                            backgroundColor: viewMode == "list" ? COLORS.secondary : null,
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: SIZES.base
                        }}
                        onPress={() => setViewMode("list")}
                    >
                        <Image
                            source={icons.menu}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderCategoryList() {

        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                        backgroundColor: COLORS.white,
                        margin: 5,
                        paddingVertical: SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        borderRadius: 10,
                        ...styles.shadow
                    }}
                    onPress={() => setSelectedCategory(item)}
                >
                    <Image
                        source={item.icon}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: item.color
                        }}
                    />
                    <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>{item.name}</Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
                <Animated.View style={{ height: categoryListValue }}>
                    <FlatList
                        data={categories}
                        keyExtractor={item => `${item.id}`}
                        numColumns={2}
                        renderItem={renderItem}
                    />
                </Animated.View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: SIZES.base,
                    }}
                    onPress={() => {
                        if (showMoreToggle) {
                            Animated.timing(categoryListValue, {
                                toValue: 110,
                                duration: 300,
                                useNativeDriver: false
                            }).start()
                        } else {
                            Animated.timing(categoryListValue, {
                                toValue: 170,
                                duration: 300,
                                useNativeDriver: false
                            }).start()
                        }
                        setShowMoreToggle(!showMoreToggle)
                    }}
                >
                    <Text style={{ ...FONTS.body4 }}>{showMoreToggle ? "LESS" : "MORE"}</Text>
                    <Image
                        source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
                        resizeMode="contain"
                        style={{
                            width: 15,
                            height: 15,
                            marginLeft: 5
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderExpensesTitle() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, marginTop: SIZES.radius, backgroundColor: COLORS.lightGray2, height: 80 }}>
                <Text style={{ ...FONTS.h3, color: COLORS.primary }}>INCOMING EXPENSES</Text>
                <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>12 total</Text>
            </View>
        )
    }

    function renderIncomingSection() {

        let allExpenses = selectedCategory ? selectedCategory.expenses : []
        let incomingExpenses = allExpenses.filter(a => a.status == "P")

        const renderItem = ({ item, index }) => {
            return (
                <View
                    style={{
                        width: 300,
                        marginLeft: index == 0 ? SIZES.padding : 0,
                        marginRight: SIZES.padding,
                        marginVertical: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white,
                        ...styles.shadow
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: SIZES.radius,
                            marginTop: SIZES.radius,
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 20,
                                backgroundColor: COLORS.lightGray,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                source={selectedCategory.icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: selectedCategory.color
                                }}
                            />
                        </View>
                        <Text style={{ marginLeft: SIZES.base, color: selectedCategory.color, ...FONTS.h3 }}>{selectedCategory.name}</Text>
                    </View>
                    <View style={{ paddingHorizontal: SIZES.radius }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.primary }}>{item.title}</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.darkgray, flexWrap: 'wrap' }}>{item.description}</Text>
                        <View style={{ marginTop: SIZES.radius }}>
                            <Text style={{ ...FONTS.body4, color: COLORS.primary }}>LOCATION</Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: SIZES.base
                                }}
                            >
                                <Image
                                    source={icons.pin}
                                    resizeMode="contain"
                                    style={{
                                        width: 15,
                                        height: 15,
                                        tintColor: COLORS.lightBlue
                                    }}
                                />
                                <Text style={{ ...FONTS.body4, color: COLORS.darkgray, marginLeft: SIZES.base }}>{item.location}</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={{
                            borderBottomStartRadius: SIZES.radius,
                            borderBottomEndRadius: SIZES.radius,
                            backgroundColor: selectedCategory.color,
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingVertical: SIZES.radius,
                            marginTop: SIZES.base
                        }}
                        onPress={() => console.log("Confirm Expense Pressed")}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>CONFIRM {item.total.toFixed(2)} USD</Text>

                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View>
                {renderExpensesTitle()}
                {
                    incomingExpenses.length > 0 &&
                    <FlatList
                        data={incomingExpenses}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => `${item.id}`}
                        renderItem={renderItem}
                    />
                }
                {
                    incomingExpenses.length == 0 &&
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.primary }}>Select a Category to See the Expenses!</Text>
                    </View>
                }
            </View>

        )
    }

    return (
        <View style={styles.container}>

            {/* Nav Bar */}
            {renderNavBar()}

            {/* Header Section */}
            {renderHeader()}

            {/* Category Header Section */}
            {renderCategoryHeader()}

            {/* Category Section */}
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
                {
                    viewMode == "list" &&
                    <View>
                        {renderCategoryList()}
                        {renderIncomingSection()}
                    </View>
                }
                {
                    viewMode == "chart" &&
                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 300 }}>
                        <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>Chart Feature will be released soon!</Text>
                    </View>
                }
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    }
})

export default HomeScreen
