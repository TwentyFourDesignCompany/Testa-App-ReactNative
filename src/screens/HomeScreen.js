import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import InputBox from '../components/InputBox';
import Svg, {Path} from 'react-native-svg';
import AppointmentCard from '../components/AppointmentCard';

function HomeCard(props) {
  return (
    <View style={{...styles.physicianCard, ...props.color, ...props.style}}>
      <View style={{width: '60%'}}>
        <Text style={{fontSize: 22, color: 'black', fontWeight: '600'}}>
          {props.heading}
        </Text>
        <Text style={{fontSize: 14, color: 'black'}}>{props.description}</Text>
      </View>
      <View
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: 130,
          height: 150,
        }}>
        <Image
          style={{width: '100%', height: '100%'}}
          resizeMode={'contain'}
          source={props.src}
        />
      </View>
    </View>
  );
}

// <MapView
//     provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//     style={styles.map}
//     region={{
//       latitude: 37.78825,
//       longitude: -122.4324,
//       latitudeDelta: 0.015,
//       longitudeDelta: 0.0121,
//     }}></MapView>

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 20}}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.row}>
          <View>
            <Text style={{fontSize: 15, color: 'black'}}>Hello! 👋</Text>
            <Text style={{fontSize: 24, color: 'black', fontWeight: '600'}}>
              Adnan Karim
            </Text>
          </View>
          <Pressable>
            <Image
              style={{width: 40, height: 40, borderRadius: 10}}
              source={require('../assets/userPic.png')}
            />
          </Pressable>
        </View>
        <InputBox
          style={{marginVertical: 18}}
          svg={
            <Svg
              width={26}
              height={26}
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M13 4.333a4.332 4.332 0 014.333 4.334A4.332 4.332 0 0113 13a4.332 4.332 0 01-4.333-4.333A4.332 4.332 0 0113 4.334zm0 17.334s8.667 0 8.667-2.167c0-2.6-4.225-5.416-8.667-5.416S4.333 16.9 4.333 19.5c0 2.167 8.667 2.167 8.667 2.167z"
                fill="#B4B4B7"
              />
            </Svg>
          }
          placeholder="Search Medical"
        />
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            fontWeight: '600',
            marginVertical: 6,
          }}>
          Test Packages
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 6,
          }}>
          <View style={styles.packagesContainer}>
            <Svg
              width={38}
              height={38}
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M27.526 23.108v9.233a2.267 2.267 0 01-.758 4.407 2.274 2.274 0 01-2.273-2.273c0-.988.635-1.82 1.515-2.134v-9.233h-1.515c0 1.673-1.696 3.031-3.79 3.031-2.092 0-3.788-1.358-3.788-3.031H15.4v3.108a3.793 3.793 0 013.032 3.712v3.031a3.786 3.786 0 01-1.305 2.845.763.763 0 01-1.07-.073.758.758 0 01.074-1.07 2.266 2.266 0 00.785-1.702v-3.031a2.276 2.276 0 00-2.274-2.273 2.276 2.276 0 00-2.273 2.273v3.031c0 .646.286 1.267.787 1.702a.76.76 0 01.072 1.07.76.76 0 01-1.068.073 3.783 3.783 0 01-1.306-2.845v-3.031c0-1.831 1.303-3.36 3.03-3.712v-3.108a6.063 6.063 0 00-6.062 6.062v9.094h25.765V29.17a6.063 6.063 0 00-6.062-6.062zM18.085 21.067a6.792 6.792 0 005.241 0 6.82 6.82 0 004.2-6.295V12.5h-13.64v2.273a6.818 6.818 0 004.2 6.295zM27.526 6.295a9.505 9.505 0 00-6.82-2.89 9.508 9.508 0 00-6.82 2.89v4.688h13.64V6.295zm-4.547 1.657h-1.515v1.515h-1.516V7.952h-1.515V6.436h1.515V4.921h1.515v1.515h1.516v1.516z"
                fill="#1C6BA4"
              />
            </Svg>
          </View>
          <View
            style={[
              styles.packagesContainer,
              {backgroundColor: 'rgba(224,159,31,0.17)'},
            ]}>
            <Svg
              width={38}
              height={38}
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M22.718 20.09a9.243 9.243 0 016.183-2.343 9.58 9.58 0 013.968.882l1.52-1.383c2-2.11 1.686-5.865-.813-8.548-2.485-2.716-6.217-3.315-8.486-1.452l-8.586 7.94c1.285.495 2.517 1.178 3.61 2.142 1.34 1.058 2.186 2.196 2.604 2.762zM21.809 20.99a14.929 14.929 0 00-2.496-2.733c-1.206-1.012-2.484-1.711-3.794-2.12l-8.786 8.12c-2.21 2.049-1.961 5.974.657 8.733 2.542 2.755 6.413 3.333 8.612 1.278l4.052-3.763a9.921 9.921 0 01-.574-3.275c0-2.398.863-4.6 2.33-6.24h-.001zM36.83 24.81l-15.346 6.081c1.87 3.806 6.402 5.616 10.471 4.028 4.03-1.62 6.12-6.017 4.875-10.109z"
                fill="#E09F1F"
              />
              <Path
                d="M25.87 19.498c-4.043 1.586-6.156 6.01-4.91 10.093l15.358-6.08c-1.883-3.81-6.414-5.612-10.448-4.013z"
                fill="#E09F1F"
              />
            </Svg>
          </View>
          <View
            style={[
              styles.packagesContainer,
              {backgroundColor: 'rgba(0,157,199,0.14)'},
            ]}>
            <Svg
              width={38}
              height={38}
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M23.434 19.855l-1.48-2.175-1.462 3.238a.46.46 0 01-.42.292h-.002a.46.46 0 01-.42-.29l-1.035-2.255-.62 1.146a.715.715 0 01-.608.364h-2.639a.376.376 0 100 .754h2.489c.738.833 1.835 1.588 3.4 2.129 2.028-.7 3.275-1.755 3.963-2.883h-.562a.76.76 0 01-.604-.32z"
                fill="#009DC7"
              />
              <Path
                d="M26.992 18.679h-1.788c.39-1.84-.433-3.554-1.559-3.956-2.02-.722-3.007 1.104-3.007 1.104s-.987-1.826-3.008-1.104c-1.277.456-2.165 2.599-1.336 4.7h1.055l.872-1.614a.47.47 0 01.43-.265.474.474 0 01.413.293l1.005 2.189 1.4-3.096a.482.482 0 01.395-.296.472.472 0 01.44.224l1.752 2.574h2.935a.376.376 0 100-.753h.001z"
                fill="#009DC7"
              />
              <Path
                d="M30.782 9.104h-4.228V8.29c0-.631-.513-1.143-1.144-1.143h-.99a4.059 4.059 0 00-7.098 0h-.99c-.633 0-1.145.512-1.145 1.143v.813h-4.23A2.09 2.09 0 008.87 11.19v23.736a2.09 2.09 0 002.087 2.087h19.825a2.09 2.09 0 002.087-2.087V11.19a2.09 2.09 0 00-2.087-2.087zM10.957 34.927V11.19h4.228v1.14c0 .632.513 1.143 1.145 1.143h9.078c.633 0 1.145-.511 1.145-1.143v-1.14h4.227l.002 23.737H10.957z"
                fill="#009DC7"
              />
              <Path
                d="M22.384 26.222c0 .123-.1.223-.223.223H13.84a.223.223 0 01-.223-.223v-.89c0-.122.1-.222.223-.222h8.322c.122 0 .222.1.222.222v.89zM25.94 27.165a.776.776 0 01-.62-.317l-1.73-2.27.953-.728 1.357 1.78 2.218-3.641 1.023.624-2.537 4.169a.776.776 0 01-.624.383h-.04zM22.384 32.222c0 .123-.1.222-.223.222H13.84a.222.222 0 01-.223-.221v-.891c0-.123.1-.223.223-.223h8.322c.122 0 .222.1.222.223v.89zM25.94 33.164a.776.776 0 01-.62-.317l-1.73-2.27.953-.727 1.357 1.778 2.218-3.64 1.023.623-2.537 4.17a.778.778 0 01-.624.384h-.04z"
                fill="#009DC7"
              />
            </Svg>
          </View>
          <View
            style={[
              styles.packagesContainer,
              {backgroundColor: 'rgba(157,76,108,0.2)'},
            ]}>
            <Svg
              width={38}
              height={38}
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M33.225 21.285a.444.444 0 00.098 0 1.312 1.312 0 100-.991.444.444 0 00-.098 0h-1.601a10.74 10.74 0 00-.58-2.994l1.486-.59a.366.366 0 00.088-.047 1.315 1.315 0 10-.364-.92.43.43 0 00-.094.027l-1.48.593a10.794 10.794 0 00-1.767-2.697l1.146-1.122a.68.68 0 00.054-.081 1.312 1.312 0 10-.674-.694c-.027.02-.057.03-.084.053l-1.143 1.123a10.692 10.692 0 00-2.562-1.767l.64-1.466a.506.506 0 00.03-.094 1.313 1.313 0 00.557-2.513 1.311 1.311 0 00-1.466 2.115.676.676 0 00-.047.088l-.64 1.466a10.595 10.595 0 00-3.301-.674V8.485a.444.444 0 000-.098 1.312 1.312 0 10-.991 0 .457.457 0 000 .098v1.601a10.61 10.61 0 00-3.3.674l-.648-1.442a.729.729 0 00-.047-.088 1.308 1.308 0 10-.9.388.537.537 0 00.03.094l.644 1.466a10.7 10.7 0 00-2.542 1.75l-1.166-1.123c-.027-.023-.057-.033-.084-.053a1.311 1.311 0 10-.675.694.663.663 0 00.055.08l1.146 1.123c-.712.796-1.3 1.694-1.747 2.664l-1.48-.59a.336.336 0 00-.097-.028 1.311 1.311 0 10-.371.918.55.55 0 00.087.047l1.48.593c-.341.977-.54 2-.586 3.034H8.636a.457.457 0 00-.097 0 1.311 1.311 0 100 .991.444.444 0 00.097 0h1.602c.05 1.016.246 2.02.58 2.98l-1.487.593a.445.445 0 00-.091.044 1.311 1.311 0 10.367.92.3.3 0 00.095-.027l1.49-.59c.45.983 1.045 1.892 1.766 2.697l-1.146 1.123a.653.653 0 00-.054.08 1.311 1.311 0 10.674.695.424.424 0 00.084-.054l1.143-1.122c.76.709 1.62 1.302 2.552 1.763l-.64 1.47a.449.449 0 00-.03.094 1.308 1.308 0 10.906.391.637.637 0 00.05-.08l.641-1.47c1.057.399 2.172.626 3.3.674v1.6a.458.458 0 000 .099 1.31 1.31 0 10.992 0 .458.458 0 000-.098v-1.588a10.61 10.61 0 003.3-.674l.647 1.443c.014.03.031.058.05.084a1.312 1.312 0 10.898-.38.446.446 0 00-.03-.096l-.645-1.47a10.7 10.7 0 002.542-1.749l1.166 1.123c.026.021.055.04.084.054a1.312 1.312 0 10.675-.694.67.67 0 00-.054-.081l-1.146-1.123a10.708 10.708 0 001.743-2.66l1.483.587a.336.336 0 00.098.027 1.311 1.311 0 10.37-.917.546.546 0 00-.087-.047l-1.48-.59c.341-.978.539-2 .586-3.034l1.595.01zm-8.852-7.804a2.218 2.218 0 110 4.435 2.218 2.218 0 010-4.435zm-3.277 9.681a2.219 2.219 0 110-4.438 2.219 2.219 0 010 4.438zm-3.28-9.681a2.218 2.218 0 110 4.436 2.218 2.218 0 010-4.436zm-5.495 7.463a2.217 2.217 0 013.792-1.563 2.219 2.219 0 11-3.792 1.563zm5.495 7.134a2.218 2.218 0 110-4.437 2.218 2.218 0 010 4.437zm6.557 0a2.218 2.218 0 110-4.436 2.218 2.218 0 010 4.436zm2.963-4.915a2.219 2.219 0 110-4.438 2.219 2.219 0 010 4.438z"
                fill="#9D4C6C"
              />
            </Svg>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 6,
          }}>
          <Text style={styles.textPackages}>Serological Screening</Text>
          <Text style={styles.textPackages}>Medical Microbiology</Text>
          <Text style={styles.textPackages}>Clinical Biochemistry</Text>
          <Text style={styles.textPackages}>Clinical Biochemistry</Text>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <HomeCard
            heading="Get the Best Medical Service"
            src={require('../assets/physician.png')}
            description="Lorem Ipsum is simply dummy text of the printing"
          />
          <HomeCard
            color={{backgroundColor: 'rgba(224,159,31,0.17)'}}
            src={require('../assets/emergency.png')}
            heading="Testa Emergency"
            description="Lorem Ipsum is simply dummy text of the printing"
          />
        </ScrollView>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <HomeCard
            style={{paddingVertical: 20, borderRadius: 20, marginTop: 40}}
            color={{backgroundColor: 'rgba(157,76,108,0.2)'}}
            src={require('../assets/anternal.png')}
            heading="Testa Antenatal "
            description="Lorem Ipsum is simply dummy text of the printing dummy text of the printing"
          />
          <HomeCard
            style={{paddingVertical: 20, borderRadius: 20, marginTop: 40}}
            color={{backgroundColor: 'rgba(0,157,199,0.14)'}}
            src={require('../assets/veccination.png')}
            heading="Testa Vaccination "
            description="Lorem Ipsum is simply dummy text of the printing"
          />
          <HomeCard
            style={{paddingVertical: 20, borderRadius: 20, marginTop: 40}}
            color={{backgroundColor: 'rgba(224,159,31,0.17)'}}
            src={require('../assets/fundme.png')}
            heading="Testa FunDMe"
            description="Lorem Ipsum is simply dummy text of the printing"
          />
        </ScrollView>

        <Text
          style={{
            fontSize: 18,
            color: 'black',
            fontWeight: '600',
            marginVertical: 8,
            marginTop: 30,
          }}>
          Appointments
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{width: '100%'}}>
          <AppointmentCard
            onPress={() => {
              navigation.navigate('Appointments');
            }}
          />
          <AppointmentCard
            onPress={() => {
              navigation.navigate('Appointments');
            }}
          />
          <AppointmentCard
            onPress={() => {
              navigation.navigate('Appointments');
            }}
          />
          <AppointmentCard
            onPress={() => {
              navigation.navigate('Appointments');
            }}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: Dimensions.get('window').height / 2.6,
    marginTop: 8,
    borderRadius: 8,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  packagesContainer: {
    width: '21%',
    backgroundColor: 'rgba(28,107,164,0.15)',
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  textPackages: {
    width: '21%',
    fontSize: 10,
    color: 'black',
    textAlign: 'center',
  },
  physicianCard: {
    width: 280,
    backgroundColor: '#DCEDF9',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingVertical: 40,
    borderRadius: 30,
    marginTop: 20,
    marginRight: 10,
  },
});
