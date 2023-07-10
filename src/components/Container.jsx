import abstract from '../assets/using.png'
import organizations from '../assets/organizations.png'
import authenticate from '../assets/authenticate.png'
import manage from '../assets/manage.png'
import billing from '../assets/billing.png'
import support from '../assets/support.png'
import Item from './Item'

const Container = () => {
  return (
    <div className="w-full pb-4">
        <div className="px-8 place-content-center">
            <div className="mt-32 mb-16">
                <div className='mx-32'>

                    <div className='flex flex-row'>
                        <div className='flex flex-col w-full'>
                            <Item 
                                imageSource={abstract}
                                title='Using Abstract'
                                text='Abstract lets you manage, version, and document your designs in one place.'
                            />
                            <Item 
                                imageSource={organizations}
                                title='Manage organizations, teams, and projects'
                                text='Use Abstract organizations, teams, and projects to organize your people and your work.'
                            />
                            <Item 
                                imageSource={authenticate}
                                title='Authenticate to Abstract'
                                text='Set up and configure SSO, SCIM, and Just-in-Time provisioning.'
                            />
                        </div>
                        <div className='flex flex-col w-full'>
                            <Item 
                                imageSource={manage}
                                title='Manage your account'
                                text='Configure your account settings, such as your email, profile details, and password.'
                            />
                            <Item 
                                imageSource={billing}
                                title='Manage billing'
                                text='Change subscriptions and payment details.'
                            />
                            <Item 
                                imageSource={support}
                                title='Abstract support'
                                text='Get in touch with a human.'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Container