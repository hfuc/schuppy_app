import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import { ScrollView } from 'react-native-virtualized-view';
import Aopolo from '../component/Aopolo';
import Aothun from '../component/Aothun';
import Aosomi from '../component/Aosomi';
import Quandai from '../component/quandai';
import Quanshort from '../component/Quanshort';
const Follow = () => {
  return (
    <ScrollView>
      <View style={{ width: '100%', height: 60, backgroundColor: '#99CCFF', justifyContent: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Danh mục</Text>
      </View>
      <Aopolo />
      <Aothun />
      <Aosomi />
      <Quandai />
      <Quanshort />
    </ScrollView>
  )
}
export default Follow;