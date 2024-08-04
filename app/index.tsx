import { Text, View } from 'react-native';

const links = [
  {
    name: 'bank balance',
    key: 1,
  },
  {
    name: 'money',
    key: 2,
  },
  {
    name: 'credit score',
    key: 3,
  },
];

export default function Index() {
  return (
    <View className='p-[16px] flex justify-start items-start h-screen bg-[#0f0f0f]'>
      <View>
        <Text className='text-[#5e5e5e] text-1xl'>explore</Text>
        <Text className='text-[#f0f0f0] text-4xl uppercase font-bold'>
          Cred
        </Text>
      </View>
      <View>
        <Text className='text-[#5e5e5e] text-sm uppercase font-semibold my-[20px] tracking-wider'>
          Money Matters
        </Text>
        <View className='flex flex-row items-start gap-6'>
          {links.map(link => (
            <View
              className='flex justify-center item-center gap-4'
              key={link.key}
            >
              <View className='h-[64px] w-[64px] bg-[#5e5e5e] rounded-full'></View>
              <Text className='text-[#f0f0f0] text-wrap text-center '>
                {link.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
