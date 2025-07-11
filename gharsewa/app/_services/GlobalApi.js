import { GraphQLClient, gql } from "graphql-request";

const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/' + process.env.NEXT_PUBLIC_MASTER_URL_KEY + '/master'

const graphQLClient = new GraphQLClient(MASTER_URL, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`,
  },
});
console.log("master_url",MASTER_URL);
console.log("token=>",process.env.NEXT_PUBLIC_HYGRAPH_TOKEN);

const getCategory = async()=>{
     
    const query=gql`query Category {
  categories {
    bgcolor {
      hex
    }
    id
    name
    icon {
      url
    }
  }
} `;
const result=await graphQLClient.request(query);
return result;
}
const getAllBusinessList=async()=>{
    const query=gql`query BusinessList {
  businessLists {
    about
    address
    category {
      name
    }
    contactPerson
    email
    images {
      url
    }
    id
    name
  }
}`;
const result=await graphQLClient.request(query);
return result;
}
const getBusinessByCategory=async(category)=>{
    const query=gql`
    query MyQuery {
        businessLists(where: {category: 
            {name: "`+category+`"}}) {
          about
          address
          category {
            name
          }
          contactPerson
          email
          id
          name
          images {
            url
          }
        }
      }
      `
      const result=await graphQLClient.request(query)
      return result;
}
const getBusinessById=async(id)=>{
  const query=gql`
  query GetBusinessById {
    businessList(where: {id: "`+id+`"}) {
      about
      address
      category {
        name
      }
      contactPerson
      email
      id
      name
      images {
        url
      }
    }
  }
  `
  const result=await graphQLClient.request(query)
      return result;
}
export const createNewBooking = async (
  businessId,
  date,
  time,
  userEmail,
  userName
) => {
  if (!businessId) {
    throw new Error("business id is required but was not provided");
  }

  console.log("businessId =>", businessId);

  const mutationQuery = gql`
    mutation CreateBooking(
      $businessId: ID!
      $date: String!
      $time: String!
      $userEmail: String!
      $userName: String!
    ) {
      createBooking(
        data: {
          bookingStatus: booked
          businessList: { connect: { id: $businessId } }
          date: $date
          time: $time
          userEmail: $userEmail
          userName: $userName
        }
      ) {
        id
      }
      publishManyBookings(to: PUBLISHED) {
        count
      }
    }
  `;

  const variables = {
    businessId,
    date,
    time,
    userEmail,
    userName,
  };

  try {
    const result = await graphQLClient.request(mutationQuery, variables);
    console.log("RESULT =>", result);
    return result;
  } catch (error) {
    console.error(
      "GRAPHQL ERROR =>",
      JSON.stringify(error, null, 2)
    );
    throw error;
  }
};

const BusinessBookedSlot=async(businessId,date)=>{
  const query=gql`
  query BusinessBookedSlot {
    bookings(where: {businessList: 
      {id: "`+businessId+`"}, date: "`+date+`"}) {
      date
      time
    }
  }
  `
  const result=await graphQLClient.request(query)
  return result;
}

const GetUserBookingHistory=async(userEmail)=>{
  const query=gql`
  query GetUserBookingHistory {
    bookings(where: {userEmail: "`+userEmail+`"}
    orderBy: publishedAt_DESC) {
      businessList {
        name
        images {
          url
        }
        contactPerson
        address
      }
      date
      time
      id
    }
  }
  `
  const result=await graphQLClient.request(query)
  return result;

}


export default{
    getCategory,
    getAllBusinessList,
    getBusinessByCategory,
    getBusinessById,
    createNewBooking,
    BusinessBookedSlot,
    GetUserBookingHistory,
}
