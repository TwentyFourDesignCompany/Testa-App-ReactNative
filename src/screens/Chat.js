import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Svg, {G, Path, Defs, ClipPath, Circle} from 'react-native-svg';

function SendMessage() {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end',
      }}>
      <View
        style={{
          padding: 14,
          borderRadius: 8,
          backgroundColor: '#C3DCF9',
          width: '70%',
          marginTop: 14,
        }}>
        <Text style={{fontSize: 14, color: '#000'}}>
          Thank you, I appreciate this so much
        </Text>
      </View>
    </View>
  );
}

function ReceiveMessage() {
  return (
    <View
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
      }}>
      <View
        style={{
          padding: 14,
          borderRadius: 8,
          backgroundColor: '#EAEAEA',
          width: '70%',
          marginTop: 14,
        }}>
        <Text style={{fontSize: 14, color: '#000'}}>
          She’s a UI/UX Designer who delights in expressing her creativity in
          her designs while intuitively solving problems in digital experiences.
        </Text>
      </View>
    </View>
  );
}

export default function Chat({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: Dimensions.get('window').height,
          maxHeight: '100%',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: '#fff',
          }}>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <Image
              style={{width: 45, height: 45, borderRadius: 45}}
              source={require('../assets/userPic.png')}
            />
            <Text
              style={{
                fontSize: 14,
                color: '#000',
                fontWeight: '600',
                marginLeft: 10,
              }}>
              Adeola Odeku
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Svg
              width={23}
              height={33}
              viewBox="0 0 29 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M25.534 5.461H3.466C1.555 5.461 0 7.231 0 9.406v14.186c0 2.175 1.555 3.945 3.467 3.945h22.067c1.91 0 3.466-1.77 3.466-3.945V9.406c0-2.175-1.555-3.945-3.466-3.945zm1.548 18.13c0 .973-.695 1.763-1.549 1.763H3.468c-.854 0-1.549-.79-1.549-1.762v-9.507h25.164v9.507zm0-12.62l-25.164.003V9.406c0-.972.695-1.762 1.549-1.762h22.067c.853 0 1.548.79 1.548 1.762v1.566z"
                fill="#225897"
              />
              <Path
                d="M4.299 23.33h5.25c.188 0 .341-.174.341-.388v-1.179c0-.214-.153-.387-.34-.387H4.298c-.188 0-.341.173-.341.387v1.18c0 .213.152.386.34.386zM19.707 17.877c.545 0 1.048.208 1.451.558.403-.35.906-.558 1.451-.558 1.324 0 2.396 1.221 2.396 2.727 0 1.506-1.072 2.726-2.396 2.726a2.204 2.204 0 01-1.451-.557c-.403.35-.906.557-1.451.557-1.324 0-2.396-1.22-2.396-2.726s1.072-2.727 2.396-2.727z"
                fill="#225897"
              />
            </Svg>
          </TouchableOpacity>
        </View>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#F0F0F2',
            width: '100%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <SendMessage />
            <ReceiveMessage />
            <ReceiveMessage />
            <SendMessage />
            <SendMessage />
            <SendMessage />
          </View>
        </ScrollView>
        <View
          style={{
            padding: 10,
            backgroundColor: '#fff',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={{marginHorizontal: 14}}>
            <Svg
              width={24}
              height={24}
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <G clipPath="url(#clip0_1_2988)">
                <Path
                  d="M7.64 26.414c-1.671 0-3.237-.718-4.367-1.862-2.192-2.219-2.803-6.092.27-9.202L16.148 2.587c1.278-1.293 2.903-1.793 4.459-1.37 1.53.413 2.781 1.682 3.191 3.23.417 1.577-.076 3.224-1.352 4.517L10.39 21.17c-.688.697-1.466 1.109-2.248 1.192-.774.082-1.512-.168-2.03-.692-.936-.952-1.07-2.738.49-4.315l8.466-8.573a.884.884 0 011.26 0 .91.91 0 010 1.275l-8.469 8.574c-.732.74-.799 1.447-.487 1.764.137.137.344.2.583.173.366-.037.784-.28 1.175-.674L21.186 7.69c.828-.838 1.144-1.823.892-2.774a2.796 2.796 0 00-1.93-1.956c-.94-.255-1.914.067-2.742.905L4.801 16.628c-2.348 2.378-1.786 5.115-.27 6.65 1.517 1.535 4.218 2.107 6.567-.274l12.606-12.763a.884.884 0 011.26 0 .91.91 0 010 1.277L12.357 24.28c-1.486 1.503-3.15 2.134-4.717 2.134z"
                  fill="#559EF8"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_1_2988">
                  <Path
                    fill="#fff"
                    transform="translate(.397 .81)"
                    d="M0 0H25.8621V25.8621H0z"
                  />
                </ClipPath>
              </Defs>
            </Svg>
          </TouchableOpacity>
          <TextInput
            style={{
              backgroundColor: '#EBE9E9',
              width: '65%',
              paddingHorizontal: 20,
              borderRadius: 20,
              color: '#000',
            }}
            placeholderTextColor="#646464"
            placeholder="Type something .."
          />
          <TouchableOpacity style={{marginHorizontal: 14}}>
            <Svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M14.631 2.45c.638 0 1.23.329 1.568.871l1.25 2.002h1.946a2.67 2.67 0 012.67 2.67V18.26a2.67 2.67 0 01-2.67 2.67H5.02a2.67 2.67 0 01-2.67-2.67V7.992a2.67 2.67 0 012.67-2.67h2.11L8.264 3.37a1.848 1.848 0 011.598-.92h4.769zm0 1.233H9.863a.616.616 0 00-.48.23l-.052.076-1.315 2.26a.616.616 0 01-.532.306H5.02a1.438 1.438 0 00-1.438 1.438V18.26c0 .793.644 1.437 1.438 1.437h14.375a1.438 1.438 0 001.437-1.438V7.994a1.437 1.437 0 00-1.437-1.438h-2.288a.616.616 0 01-.522-.29l-1.431-2.292a.616.616 0 00-.523-.29zm-2.424 4.516a4.518 4.518 0 110 9.035 4.518 4.518 0 010-9.035zm0 1.232a3.286 3.286 0 100 6.573 3.286 3.286 0 000-6.573z"
                fill="#559EF8"
              />
            </Svg>
          </TouchableOpacity>
          <TouchableOpacity style={{marginRight: 10}}>
            <Svg
              width={29}
              height={29}
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M14.034 18.304a4.2 4.2 0 004.2-4.2v-7a4.2 4.2 0 10-8.4 0v7a4.2 4.2 0 004.2 4.2zm0-1.4a2.8 2.8 0 01-2.8-2.8v-7a2.8 2.8 0 015.6 0v7a2.8 2.8 0 01-2.8 2.8z"
                fill="#559EF8"
              />
              <Path
                d="M7.034 13.403a.7.7 0 01.7.7 6.3 6.3 0 0012.6 0 .7.7 0 111.4 0 7.7 7.7 0 01-7 7.67v2.83a.7.7 0 01-1.4 0v-2.83a7.7 7.7 0 01-7-7.67.7.7 0 01.7-.7z"
                fill="#559EF8"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
