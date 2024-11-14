import React from 'react';
import {Dimensions, StyleSheet, View, Image} from 'react-native';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';

const {width} = Dimensions.get('window');
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});
const Carousels = () => {
  const data = [
    {
      id: 1,
      text: require('./assets/carosol/0ab733d9dc819cfa9ee0f4c427665e5a.jpg'),
    },
    {
      id: 2,
      text: require('./assets/carosol/437171f20b9e20190ae05e59e21c81f9.jpg'),
    },
    {
      id: 3,
      text: require('./assets/carosol/722a2d3e7f7b31375d9b93699972ac61.jpg'),
    },
    {
      id: 4,
      text: require('./assets/carosol/fd7044bf8efe205f8a122e67b862e7e2.jpg'),
    },
  ];
  return (
    <Carousel
      width={width}
      height={500}
      data={data}
      loop
      autoPlay
      autoPlayInterval={2000}
      scrollAnimationDuration={3000}
      renderItem={({item}) => (
        <View>
          <Image source={item.text} style={style.sliderText} />
        </View>
      )}
    />
  );
};

const style = StyleSheet.create({
  sliderText: {
    width,
    height: 500,
    //padding: 5,
  },
});

export default Carousels;
