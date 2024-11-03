/* useLocalSearchParams */
import { View, Text } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';

const list = () => {
  const { category } = useLocalSearchParams();

  // Проверка наличия параметра 'category'
  // В браузере ввести http://localhost:8081/list?category=books и посмотреть
  const displayCategory = category ? category : 'No category selected';

  return (
    <View>
      <Text>List Page - Category: {displayCategory}</Text>
      <Link href='/home'>Go to Home</Link>
    </View>
  );
};

export default list;


/* useGlobalSearchParams */
// import { View, Text } from 'react-native';
// import { Link, useGlobalSearchParams } from 'expo-router';
//
// const list = () => {
//     const { user, extra } = useGlobalSearchParams();
//
//     return (
//         <View>
//             <Text>List Page</Text>
//             <Text>User: {user}</Text>
//             <Text>Extra: {extra}</Text>
//             <Link href='/home'>Go to Home</Link>
//         </View>
//     );
// };
//
// export default list;
