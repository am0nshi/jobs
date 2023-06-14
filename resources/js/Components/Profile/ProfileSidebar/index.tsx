import ProfileSidebarItem from './ProfileSidebarItem'
import { ProfileSidebarTypes } from "@/Enums/ProfileSidebarTypeEnum"
import ProfileSidebarWidget from './ProfileSidebarWidget'
const ProfileSidebar = ({ type }: { type: string }) => {
  return (
    <div className="dashboard-sidebar">
      <div className="single-widget mb-60">
        <div className="dashboard-menu">
          <ul>
            <ProfileSidebarItem
              className={type == ProfileSidebarTypes.Dashboard ? 'active' : ''}
              href="/dashboard"
              title="Dashboard"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.125 6H1.125C0.50475 6 0 5.49525 0 4.875V1.125C0 0.50475 0.50475 0 1.125 0H7.125C7.74525 0 8.25 0.50475 8.25 1.125V4.875C8.25 5.49525 7.74525 6 7.125 6ZM1.125 0.75C0.91875 0.75 0.75 0.918 0.75 1.125V4.875C0.75 5.082 0.91875 5.25 1.125 5.25H7.125C7.33125 5.25 7.5 5.082 7.5 4.875V1.125C7.5 0.918 7.33125 0.75 7.125 0.75H1.125Z" />
                <path
                  d="M7.125 17.9998H1.125C0.50475 17.9998 0 17.495 0 16.8748V8.62476C0 8.00451 0.50475 7.49976 1.125 7.49976H7.125C7.74525 7.49976 8.25 8.00451 8.25 8.62476V16.8748C8.25 17.495 7.74525 17.9998 7.125 17.9998ZM1.125 8.24976C0.91875 8.24976 0.75 8.41776 0.75 8.62476V16.8748C0.75 17.0818 0.91875 17.2498 1.125 17.2498H7.125C7.33125 17.2498 7.5 17.0818 7.5 16.8748V8.62476C7.5 8.41776 7.33125 8.24976 7.125 8.24976H1.125Z" />
                <path
                  d="M16.8755 17.9998H10.8755C10.2552 17.9998 9.75049 17.495 9.75049 16.8748V13.1248C9.75049 12.5045 10.2552 11.9998 10.8755 11.9998H16.8755C17.4957 11.9998 18.0005 12.5045 18.0005 13.1248V16.8748C18.0005 17.495 17.4957 17.9998 16.8755 17.9998ZM10.8755 12.7498C10.6692 12.7498 10.5005 12.9178 10.5005 13.1248V16.8748C10.5005 17.0818 10.6692 17.2498 10.8755 17.2498H16.8755C17.0817 17.2498 17.2505 17.0818 17.2505 16.8748V13.1248C17.2505 12.9178 17.0817 12.7498 16.8755 12.7498H10.8755Z" />
                <path
                  d="M16.8755 10.5H10.8755C10.2552 10.5 9.75049 9.99525 9.75049 9.375V1.125C9.75049 0.50475 10.2552 0 10.8755 0H16.8755C17.4957 0 18.0005 0.50475 18.0005 1.125V9.375C18.0005 9.99525 17.4957 10.5 16.8755 10.5ZM10.8755 0.75C10.6692 0.75 10.5005 0.918 10.5005 1.125V9.375C10.5005 9.582 10.6692 9.75 10.8755 9.75H16.8755C17.0817 9.75 17.2505 9.582 17.2505 9.375V1.125C17.2505 0.918 17.0817 0.75 16.8755 0.75H10.8755Z" />
              </svg>
            </ProfileSidebarItem>

            <ProfileSidebarItem
              className={type == ProfileSidebarTypes.MyProfile ? 'active' : ''}
              href="/my-profile"
              title="My Profile"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 9C18 4.02595 13.9747 0 9 0C4.02599 0 0 4.02525 0 9C0 13.8465 3.87552 17.9204 8.85554 17.9982C8.94013 18.002 9.12386 17.9985 9.12741 17.9985C9.12888 17.9985 9.13514 17.9984 9.13679 17.9983C14.0497 17.9256 18 13.922 18 9ZM9 0.527344C13.6826 0.527344 17.4727 4.31677 17.4727 9C17.4727 10.9522 16.8164 12.8032 15.6091 14.3022C15.5881 13.3575 14.9755 12.5368 14.0707 12.2503L12.3649 11.7102C12.2684 11.6276 12.2938 11.6632 10.7234 10.8851V10.1543C11.4081 9.66815 11.8822 8.90072 11.9694 8.01584C12.2945 7.96071 12.5428 7.67707 12.5428 7.33655C12.5428 6.83149 12.5428 5.1711 12.5428 4.65304C12.5428 4.06216 12.0621 3.58147 11.4713 3.58147H11.4441C11.439 3.58147 11.4349 3.57736 11.4349 3.5723C11.4349 2.98143 10.9542 2.50073 10.3633 2.50073H7.57923C6.40856 2.50073 5.45618 3.45312 5.45618 4.62379C5.45618 4.7694 5.57423 4.88746 5.71985 4.88746C5.86547 4.88746 5.98352 4.7694 5.98352 4.62379C5.98352 3.74389 6.69934 3.02808 7.57923 3.02808H10.3633C10.6634 3.02808 10.9075 3.2722 10.9075 3.5723C10.9075 3.86814 11.1482 4.10882 11.4441 4.10882H11.4713C11.7714 4.10882 12.0155 4.35294 12.0155 4.65304V6.15357H11.7209C11.5563 6.15357 11.4224 6.01966 11.4224 5.8551V5.54745C11.4224 4.96266 10.8515 4.5501 10.2963 4.73361C9.46037 5.00991 8.53956 5.00998 7.70252 4.73347C7.14723 4.5501 6.57654 4.96266 6.57654 5.54734V5.8551C6.57654 6.0197 6.44263 6.15361 6.27806 6.15361H5.98349V5.84237C5.98349 5.69675 5.86543 5.5787 5.71982 5.5787C5.5742 5.5787 5.45614 5.69675 5.45614 5.84237V7.33658C5.45614 7.67714 5.70449 7.96075 6.02961 8.01591C6.11677 8.90082 6.59092 9.66821 7.27555 10.1544V10.8854C5.70839 11.662 5.7291 11.6293 5.63428 11.7105L3.92931 12.2503C3.02456 12.5368 2.41196 13.3575 2.39098 14.3023C1.18361 12.8032 0.527344 10.9522 0.527344 9C0.527344 4.3174 4.31677 0.527344 9 0.527344ZM5.97706 13.7489L6.18198 13.5444C6.39587 13.3309 6.44646 13.0069 6.30791 12.7383L5.98282 12.108L7.04827 11.5846C6.93489 12.0588 6.93858 12.58 6.99318 13.0684C6.99321 13.0688 6.99328 13.0692 6.99332 13.0695C7.12969 14.2874 7.62683 15.6689 8.12366 16.7889C7.30547 15.9655 6.21204 14.7544 5.93666 13.9148C5.9175 13.8565 5.933 13.7929 5.97706 13.7489ZM5.98345 6.68092H6.27803C6.73341 6.68092 7.10385 6.31044 7.10385 5.85506V5.5473C7.10385 5.32332 7.32203 5.16322 7.53813 5.23452C8.48081 5.5459 9.51912 5.54586 10.4618 5.23431C10.6754 5.16375 10.8951 5.32238 10.8951 5.54745V5.8551C10.8951 6.31048 11.2655 6.68092 11.7209 6.68092H12.0155V7.33655C12.0155 7.4257 11.943 7.4982 11.8538 7.4982C11.6417 7.4982 11.465 7.6647 11.4516 7.87729C11.3702 9.16734 10.2932 10.1779 8.99947 10.1779C7.70583 10.1779 6.62871 9.16734 6.54736 7.87729C6.53396 7.66473 6.35727 7.4982 6.14514 7.4982C6.05598 7.4982 5.98349 7.4257 5.98349 7.33655V6.68092H5.98345ZM8.99975 17.4124C8.82865 17.0692 8.5976 16.5802 8.36648 16.0129L8.79947 14.31H9.2005L9.6332 16.0124C9.40166 16.5809 9.17033 17.0703 8.99975 17.4124ZM8.65315 12.7027C8.50391 12.8274 8.19777 13.0831 7.95843 13.283C7.90847 13.3247 7.83693 13.3245 7.7875 13.2839L7.50881 12.9393C7.46272 12.4771 7.46729 11.9661 7.61164 11.5286L8.65315 12.7027ZM7.8724 13.8421C7.93962 13.8421 8.0068 13.8312 8.07173 13.8106L8.30679 14.1077L8.04125 15.1521C7.88917 14.7136 7.75206 14.2564 7.65127 13.8032C7.72267 13.8286 7.79737 13.8421 7.8724 13.8421ZM9.27341 13.7827H8.72205L8.5075 13.5115L9.02869 13.0761L9.50013 13.4792L9.27341 13.7827ZM10.0509 13.2563L9.40187 12.7014L10.3909 11.5383C10.5318 11.9728 10.5359 12.4761 10.4916 12.9287L10.2221 13.2589C10.1721 13.2992 10.1005 13.2988 10.0509 13.2563ZM8.99947 10.7052C9.42377 10.7052 9.82874 10.6153 10.1961 10.4538V10.9533L9.02644 12.3288L7.80286 10.9495V10.4537C8.17017 10.6153 8.57514 10.7052 8.99947 10.7052ZM9.95846 15.1513L9.69209 14.1033L9.93157 13.7828C9.99872 13.805 10.0684 13.8166 10.1381 13.8166C10.211 13.8166 10.2835 13.8038 10.3531 13.7798C10.2525 14.2379 10.1146 14.701 9.95846 15.1513ZM2.91727 14.8972V14.3523C2.91727 13.6176 3.38794 12.9748 4.08843 12.7531L5.49415 12.308C5.50821 12.3409 5.49376 12.3092 5.83924 12.9801C5.87211 13.0438 5.86013 13.1206 5.80943 13.1712L5.6045 13.3757C5.41877 13.5611 5.35402 13.8307 5.43558 14.0792C5.77213 15.1051 7.09611 16.5258 8.0048 17.4148C6.07549 17.1904 4.29476 16.3169 2.91727 14.8972ZM9.99461 17.4148C10.4846 16.9354 11.0989 16.2985 11.612 15.6535C11.7026 15.5395 11.6837 15.3737 11.5697 15.283C11.4558 15.1924 11.2899 15.2112 11.1992 15.3252C10.7852 15.8457 10.3012 16.3627 9.87465 16.7913C10.373 15.6684 10.872 14.2823 11.0071 13.0606C11.0071 13.0602 11.0072 13.0597 11.0072 13.0593C11.0608 12.5741 11.064 12.0574 10.9512 11.5846L12.0166 12.1081L11.6915 12.7384C11.553 13.007 11.6036 13.3309 11.8175 13.5444L12.0224 13.7489C12.0664 13.7929 12.0819 13.8565 12.0628 13.9148C12.0215 14.0408 11.9586 14.1822 11.876 14.3352C11.8067 14.4634 11.8545 14.6233 11.9826 14.6925C12.1108 14.7618 12.2707 14.714 12.3399 14.5859C12.4375 14.4053 12.5128 14.2348 12.5639 14.0792C12.6454 13.8306 12.5807 13.5611 12.3949 13.3757L12.19 13.1712C12.1393 13.1206 12.1274 13.0437 12.1602 12.9801C12.5031 12.314 12.4914 12.3403 12.5054 12.3079L13.9115 12.753C14.6121 12.9748 15.0827 13.6175 15.0827 14.3523V14.8972C13.7083 16.3137 11.9287 17.19 9.99461 17.4148Z" />
              </svg>
            </ProfileSidebarItem>

            <ProfileSidebarItem
              className={type == ProfileSidebarTypes.AppliedJobs ? 'active' : ''}
              href="/applied-jobs"
              title="Applied Jobs"
            >
              <svg width="18" height="16" viewBox="0 0 18 16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.1 2.66667H13.2V1.48148C13.199 0.663628 12.5281 0.00101273 11.7 0H6.3C5.47192 0.00101273 4.80103 0.663628 4.8 1.48148V2.66667H0.9C0.402979 2.66667 0 3.06467 0 3.55556V10.151C0.0019043 10.5269 0.241699 10.8613 0.6 10.9876V15.1111C0.6 15.602 1.00298 16 1.5 16H16.5C16.997 16 17.4 15.602 17.4 15.1111V10.9878C17.7583 10.8614 17.9982 10.5269 18 10.151V3.55556C18 3.06467 17.597 2.66667 17.1 2.66667ZM5.4 1.48148C5.4 0.990596 5.80298 0.592593 6.3 0.592593H11.7C12.197 0.592593 12.6 0.990596 12.6 1.48148V2.66667H12V1.48148C12 1.31785 11.8657 1.18519 11.7 1.18519H6.3C6.13433 1.18519 6 1.31785 6 1.48148V2.66667H5.4V1.48148ZM11.4 2.66667H6.6V1.77778H11.4V2.66667ZM16.8 15.1111C16.8 15.2747 16.6657 15.4074 16.5 15.4074H1.5C1.33433 15.4074 1.2 15.2747 1.2 15.1111V11.0894L7.8 11.9884V12.7407C7.8 13.2316 8.20298 13.6296 8.7 13.6296H9.3C9.79702 13.6296 10.2 13.2316 10.2 12.7407V11.9884L16.8 11.0894V15.1111ZM9.6 12.7407C9.6 12.9044 9.46567 13.037 9.3 13.037H8.7C8.53433 13.037 8.4 12.9044 8.4 12.7407V10.963C8.4 10.7993 8.53433 10.6667 8.7 10.6667H9.3C9.46567 10.6667 9.6 10.7993 9.6 10.963V12.7407ZM17.4 10.151C17.4001 10.2988 17.2901 10.424 17.142 10.4447L17.0588 10.456L10.2 11.3902V10.963C10.2 10.4721 9.79702 10.0741 9.3 10.0741H8.7C8.20298 10.0741 7.8 10.4721 7.8 10.963V11.3902L0.858252 10.4447C0.710156 10.4242 0.599854 10.2989 0.6 10.151V3.55556C0.6 3.39193 0.734326 3.25926 0.9 3.25926H17.1C17.2657 3.25926 17.4 3.39193 17.4 3.55556V10.151Z" />
              </svg>
            </ProfileSidebarItem>

            <ProfileSidebarItem
              className={type == ProfileSidebarTypes.Bookmark ? 'active' : ''}
              href="/bookmark"
              title="Bookmark Jobs"
            >
              <svg width="16" height="18" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.82 1.24621H13.534V0.368701C13.534 0.165086 13.374 0 13.1767 0H8.00178C7.80442 0 7.6444 0.165086 7.6444 0.368701V1.24621H2.18003C1.10788 1.24621 0 1.83613 0 3.49529V15.7509C0 17.4101 1.12575 18 2.18003 18H13.82C14.8921 18 16 17.4101 16 15.7509V3.49898C16.0036 2.41131 15.4282 1.24621 13.82 1.24621ZM8.35916 0.737403H12.8193V7.20811L10.8179 5.47522C10.6848 5.3593 10.49 5.3593 10.3569 5.47522L8.35559 7.20811L8.35916 0.737403ZM13.8235 17.2626H2.18003C1.63323 17.2626 0.714764 17.0672 0.714764 15.7509V3.49898C0.714764 2.18271 1.63323 1.9873 2.18003 1.9873H7.6444V8.00819C7.64408 8.21181 7.80383 8.37717 8.0012 8.37749C8.08496 8.37763 8.16613 8.3474 8.2305 8.29209L10.5892 6.25317L12.9479 8.29209C13.0996 8.42243 13.3249 8.40123 13.4513 8.24476C13.5049 8.17835 13.5342 8.09461 13.534 8.00819V1.98361H13.82C15.0958 1.98361 15.2852 2.93118 15.2852 3.49529L15.2888 15.7509C15.2888 17.0672 14.3703 17.2626 13.8235 17.2626Z" />
                <path
                  d="M6.3003 4.52417H2.03316C1.8358 4.52417 1.67578 4.68926 1.67578 4.89287C1.67578 5.09649 1.8358 5.26157 2.03316 5.26157H6.3003C6.49767 5.26157 6.65768 5.09649 6.65768 4.89287C6.65768 4.68926 6.49767 4.52417 6.3003 4.52417Z" />
                <path
                  d="M6.3003 7.04224H2.03316C1.8358 7.04224 1.67578 7.20732 1.67578 7.41094C1.67578 7.61455 1.8358 7.77964 2.03316 7.77964H6.3003C6.49767 7.77964 6.65768 7.61455 6.65768 7.41094C6.65768 7.20732 6.49767 7.04224 6.3003 7.04224Z" />
                <path
                  d="M13.3336 9.5603H2.03316C1.8358 9.5603 1.67578 9.72539 1.67578 9.929C1.67578 10.1326 1.8358 10.2977 2.03316 10.2977H13.3336C13.5309 10.2977 13.691 10.1326 13.691 9.929C13.691 9.72539 13.5309 9.5603 13.3336 9.5603Z" />
                <path
                  d="M13.3336 12.0645H2.03316C1.8358 12.0645 1.67578 12.2295 1.67578 12.4332C1.67578 12.6368 1.8358 12.8019 2.03316 12.8019H13.3336C13.5309 12.8019 13.691 12.6368 13.691 12.4332C13.691 12.2295 13.5309 12.0645 13.3336 12.0645Z" />
                <path
                  d="M13.3336 14.6006H2.03316C1.8358 14.6006 1.67578 14.7657 1.67578 14.9693C1.67578 15.1729 1.8358 15.338 2.03316 15.338H13.3336C13.5309 15.338 13.691 15.1729 13.691 14.9693C13.691 14.7657 13.5309 14.6006 13.3336 14.6006Z" />
              </svg>
            </ProfileSidebarItem>

            <ProfileSidebarItem
              className={type == ProfileSidebarTypes.EditResume ? 'active' : ''}
              href='/edit-resume'
              title='Edit Resume'
            >
              <svg width="16" height="18" viewBox="0 0 16 18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.82 1.24621H13.534V0.368701C13.534 0.165086 13.374 0 13.1767 0H8.00178C7.80442 0 7.6444 0.165086 7.6444 0.368701V1.24621H2.18003C1.10788 1.24621 0 1.83613 0 3.49529V15.7509C0 17.4101 1.12575 18 2.18003 18H13.82C14.8921 18 16 17.4101 16 15.7509V3.49898C16.0036 2.41131 15.4282 1.24621 13.82 1.24621ZM8.35916 0.737403H12.8193V7.20811L10.8179 5.47522C10.6848 5.3593 10.49 5.3593 10.3569 5.47522L8.35559 7.20811L8.35916 0.737403ZM13.8235 17.2626H2.18003C1.63323 17.2626 0.714764 17.0672 0.714764 15.7509V3.49898C0.714764 2.18271 1.63323 1.9873 2.18003 1.9873H7.6444V8.00819C7.64408 8.21181 7.80383 8.37717 8.0012 8.37749C8.08496 8.37763 8.16613 8.3474 8.2305 8.29209L10.5892 6.25317L12.9479 8.29209C13.0996 8.42243 13.3249 8.40123 13.4513 8.24476C13.5049 8.17835 13.5342 8.09461 13.534 8.00819V1.98361H13.82C15.0958 1.98361 15.2852 2.93118 15.2852 3.49529L15.2888 15.7509C15.2888 17.0672 14.3703 17.2626 13.8235 17.2626Z" />
                <path
                  d="M6.3003 4.52417H2.03316C1.8358 4.52417 1.67578 4.68926 1.67578 4.89287C1.67578 5.09649 1.8358 5.26157 2.03316 5.26157H6.3003C6.49767 5.26157 6.65768 5.09649 6.65768 4.89287C6.65768 4.68926 6.49767 4.52417 6.3003 4.52417Z" />
                <path
                  d="M6.3003 7.04224H2.03316C1.8358 7.04224 1.67578 7.20732 1.67578 7.41094C1.67578 7.61455 1.8358 7.77964 2.03316 7.77964H6.3003C6.49767 7.77964 6.65768 7.61455 6.65768 7.41094C6.65768 7.20732 6.49767 7.04224 6.3003 7.04224Z" />
                <path
                  d="M13.3336 9.5603H2.03316C1.8358 9.5603 1.67578 9.72539 1.67578 9.929C1.67578 10.1326 1.8358 10.2977 2.03316 10.2977H13.3336C13.5309 10.2977 13.691 10.1326 13.691 9.929C13.691 9.72539 13.5309 9.5603 13.3336 9.5603Z" />
                <path
                  d="M13.3336 12.0645H2.03316C1.8358 12.0645 1.67578 12.2295 1.67578 12.4332C1.67578 12.6368 1.8358 12.8019 2.03316 12.8019H13.3336C13.5309 12.8019 13.691 12.6368 13.691 12.4332C13.691 12.2295 13.5309 12.0645 13.3336 12.0645Z" />
                <path
                  d="M13.3336 14.6006H2.03316C1.8358 14.6006 1.67578 14.7657 1.67578 14.9693C1.67578 15.1729 1.8358 15.338 2.03316 15.338H13.3336C13.5309 15.338 13.691 15.1729 13.691 14.9693C13.691 14.7657 13.5309 14.6006 13.3336 14.6006Z" />
              </svg>
            </ProfileSidebarItem>

            <ProfileSidebarItem
              className={type == ProfileSidebarTypes.ViewResume ? 'active' : ''}
              href='/view-resume'
              title='View Resume'
            >
              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_821_78)">
                  <path
                    d="M9.00001 13.345C10.5399 13.345 11.7931 12.0918 11.7931 10.5519C11.7931 10.3135 11.7615 10.0702 11.6994 9.82879C11.686 9.77667 11.6593 9.72893 11.6219 9.69025C11.5845 9.65158 11.5376 9.62329 11.486 9.60817C11.4344 9.59306 11.3797 9.59163 11.3273 9.60403C11.2749 9.61642 11.2267 9.64222 11.1873 9.67889C11.0152 9.84063 10.7879 9.93083 10.5517 9.9312C10.0384 9.9312 9.6207 9.51348 9.6207 9.00017C9.6207 8.76493 9.71039 8.539 9.8727 8.36427C9.90937 8.32489 9.93517 8.27665 9.94757 8.22429C9.95997 8.17193 9.95854 8.11724 9.94342 8.0656C9.9283 8.01395 9.90002 7.96713 9.86134 7.92972C9.82266 7.89231 9.77492 7.86559 9.72281 7.8522C9.48672 7.79099 9.2439 7.75961 9.00001 7.75879C7.46008 7.75879 6.20691 9.01196 6.20691 10.5519C6.20691 12.0918 7.46008 13.345 9.00001 13.345ZM9.00001 8.37948C9.04253 8.37948 9.08536 8.38072 9.1285 8.38351C9.04371 8.57804 8.99997 8.78797 9.00001 9.00017C9.00001 9.85579 9.69612 10.5519 10.5517 10.5519C10.7659 10.5519 10.9754 10.5075 11.1684 10.4234C11.1855 10.7189 11.1422 11.0148 11.041 11.2929C10.9398 11.5711 10.7829 11.8256 10.5799 12.041C10.3769 12.2564 10.1321 12.4281 9.86045 12.5456C9.58878 12.6631 9.29599 12.7239 9.00001 12.7243C7.80208 12.7243 6.8276 11.7498 6.8276 10.5519C6.8276 9.35396 7.80208 8.37948 9.00001 8.37948Z" />
                  <path
                    d="M17.9423 10.3713C17.8116 10.1886 14.6806 5.89648 9 5.89648C3.31945 5.89648 0.188379 10.1886 0.0577235 10.3713C0.0201608 10.424 -3.05176e-05 10.487 -3.05176e-05 10.5517C-3.05176e-05 10.6163 0.0201608 10.6793 0.0577235 10.732C0.0847235 10.7701 0.737068 11.6745 1.97814 12.6682C2.00997 12.6937 2.0465 12.7126 2.08566 12.724C2.12481 12.7353 2.16582 12.7389 2.20634 12.7344C2.24685 12.7299 2.28609 12.7174 2.3218 12.6978C2.35752 12.6781 2.38901 12.6516 2.41448 12.6198C2.43995 12.588 2.45891 12.5514 2.47026 12.5123C2.48161 12.4731 2.48514 12.4321 2.48065 12.3916C2.47615 12.3511 2.46372 12.3118 2.44406 12.2761C2.4244 12.2404 2.3979 12.2089 2.36607 12.1834C1.51386 11.5013 0.949034 10.8552 0.703241 10.5517C1.20817 9.93097 3.05969 7.87307 6.04055 6.96035C5.00555 7.81504 4.34483 9.10762 4.34483 10.5517C4.34483 13.1185 6.43314 15.2068 9 15.2068C11.5669 15.2068 13.6552 13.1185 13.6552 10.5517C13.6552 9.10886 12.9954 7.81721 11.9616 6.96283C14.9363 7.87679 16.7906 9.93221 17.2964 10.5523C17.0503 10.8561 16.4855 11.5016 15.6336 12.1838C15.5693 12.2352 15.5281 12.3101 15.519 12.3919C15.51 12.4737 15.5338 12.5558 15.5852 12.6201C15.6366 12.6844 15.7115 12.7256 15.7934 12.7347C15.8752 12.7438 15.9573 12.72 16.0216 12.6685C17.2629 11.6748 17.915 10.7701 17.942 10.7323C17.9796 10.6797 17.9999 10.6166 18 10.5519C18 10.4871 17.9799 10.424 17.9423 10.3713ZM13.0345 10.5517C13.0345 12.7762 11.2246 14.5861 9 14.5861C6.77545 14.5861 4.96552 12.7762 4.96552 10.5517C4.96552 8.3271 6.77545 6.51717 9 6.51717C11.2246 6.51717 13.0345 8.32679 13.0345 10.5517Z" />
                  <path
                    d="M2.69564 7.42362C4.0115 6.44386 6.17337 5.27573 8.99999 5.27573C11.8266 5.27573 13.9885 6.44386 15.3043 7.42362C15.3703 7.47276 15.4532 7.49366 15.5346 7.48173C15.616 7.4698 15.6894 7.42601 15.7385 7.36C15.7876 7.29399 15.8085 7.21116 15.7966 7.12974C15.7847 7.04832 15.7409 6.97497 15.6749 6.92583C15.4014 6.72231 15.1193 6.53055 14.8295 6.35107L15.3329 5.47745C15.3532 5.44214 15.3664 5.40316 15.3717 5.36274C15.377 5.32233 15.3743 5.28126 15.3637 5.2419C15.3532 5.20253 15.3349 5.16563 15.3101 5.13331C15.2853 5.10099 15.2543 5.07388 15.219 5.05352C15.1837 5.03316 15.1447 5.01996 15.1043 5.01467C15.0639 5.00937 15.0228 5.01209 14.9834 5.02267C14.9441 5.03325 14.9072 5.05147 14.8748 5.07631C14.8425 5.10114 14.8154 5.1321 14.7951 5.16742L14.2929 6.03886C13.6224 5.669 12.9162 5.36788 12.1851 5.14011L12.4929 3.994C12.5035 3.95463 12.5062 3.91357 12.5009 3.87316C12.4955 3.83275 12.4823 3.79378 12.4619 3.75847C12.4416 3.72317 12.4144 3.69223 12.3821 3.66741C12.3498 3.64259 12.3129 3.62439 12.2735 3.61383C12.2341 3.60327 12.1931 3.60058 12.1527 3.60589C12.1122 3.61121 12.0733 3.62443 12.038 3.6448C12.0027 3.66518 11.9717 3.6923 11.9469 3.72464C11.9221 3.75697 11.9039 3.79388 11.8933 3.83324L11.5876 4.97159C10.8417 4.78755 10.0781 4.68413 9.31002 4.66311V3.10331C9.31002 3.021 9.27732 2.94207 9.21912 2.88387C9.16092 2.82567 9.08198 2.79297 8.99968 2.79297C8.91737 2.79297 8.83843 2.82567 8.78023 2.88387C8.72203 2.94207 8.68933 3.021 8.68933 3.10331V4.66311C7.87468 4.68669 7.11278 4.79718 6.41171 4.97159L6.10602 3.83324C6.08204 3.75678 6.02944 3.69255 5.95921 3.65395C5.88898 3.61536 5.80655 3.6054 5.72915 3.62616C5.65175 3.64691 5.58537 3.69677 5.54386 3.76532C5.50236 3.83387 5.48895 3.9158 5.50643 3.994L5.8143 5.14011C5.0831 5.36767 4.37687 5.6688 3.70643 6.03886L3.2043 5.16742C3.18394 5.1321 3.15683 5.10114 3.1245 5.07631C3.09218 5.05147 3.05529 5.03325 3.01592 5.02267C2.97655 5.01209 2.93549 5.00937 2.89507 5.01467C2.85466 5.01996 2.81568 5.03316 2.78037 5.05352C2.74505 5.07388 2.71409 5.10099 2.68926 5.13331C2.66442 5.16563 2.64619 5.20253 2.63562 5.2419C2.62504 5.28126 2.62232 5.32233 2.62762 5.36274C2.63291 5.40316 2.64611 5.44214 2.66647 5.47745L3.16985 6.35107C2.8595 6.54349 2.57678 6.73807 2.32447 6.92583C2.29178 6.9502 2.26422 6.98077 2.24335 7.0158C2.22248 7.05082 2.20871 7.08961 2.20283 7.12996C2.19695 7.17031 2.19908 7.21141 2.20908 7.25094C2.21909 7.29046 2.23679 7.32763 2.26116 7.36031C2.28553 7.393 2.3161 7.42056 2.35113 7.44143C2.38615 7.46231 2.42494 7.47607 2.46529 7.48195C2.50563 7.48783 2.54674 7.48571 2.58627 7.4757C2.62579 7.46569 2.66296 7.44799 2.69564 7.42362Z" />
                </g>
              </svg>
            </ProfileSidebarItem>

            <ProfileSidebarItem
              className={type == ProfileSidebarTypes.Settings ? 'active' : ''}
              href='/settings'
              title='Settings'
            >
              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1 10.5H10.77C10.6459 10.5002 10.5348 10.4228 10.4922 10.3062C10.4556 10.2102 10.4163 10.1163 10.374 10.0233C10.3214 9.9102 10.3454 9.77629 10.434 9.6885L10.6692 9.453C11.0184 9.10076 11.0177 8.53271 10.6677 8.1813L9.8199 7.3335C9.46804 6.9837 8.89976 6.9837 8.5479 7.3335L8.3127 7.5684C8.22472 7.65664 8.09104 7.6806 7.9779 7.6284C7.8849 7.5861 7.791 7.5468 7.6947 7.5084C7.57751 7.46606 7.49955 7.35461 7.5 7.23V6.9C7.5 6.40294 7.09706 6 6.6 6H5.4C4.90294 6 4.5 6.40294 4.5 6.9V7.23C4.50023 7.35413 4.42279 7.46516 4.3062 7.5078C4.2102 7.5444 4.1163 7.5837 4.0233 7.626C3.91016 7.67831 3.77644 7.65435 3.6885 7.566L3.453 7.3308C3.10118 6.98123 2.53313 6.98123 2.1813 7.3308L1.3335 8.1813C0.9837 8.53316 0.9837 9.10144 1.3335 9.4533L1.5684 9.6885C1.65698 9.77629 1.68098 9.9102 1.6284 10.0233C1.5861 10.1163 1.5468 10.2102 1.5099 10.3065C1.46696 10.4238 1.35487 10.5013 1.23 10.5H0.9C0.402938 10.5 0 10.9029 0 11.4V12.6C0 13.0971 0.402938 13.5 0.9 13.5H1.23C1.35413 13.4998 1.46516 13.5772 1.5078 13.6938C1.5444 13.7898 1.5837 13.8837 1.626 13.9767C1.67858 14.0898 1.65457 14.2237 1.566 14.3115L1.3308 14.547C0.981225 14.8988 0.981225 15.4669 1.3308 15.8187L2.1786 16.6665C2.53046 17.0163 3.09874 17.0163 3.4506 16.6665L3.6858 16.4316C3.77378 16.3434 3.90746 16.3194 4.0206 16.3716C4.1136 16.4139 4.2075 16.4532 4.3038 16.4916C4.42159 16.5335 4.50023 16.645 4.5 16.77V17.1C4.5 17.5971 4.90294 18 5.4 18H6.6C7.09706 18 7.5 17.5971 7.5 17.1V16.77C7.49978 16.6459 7.57721 16.5348 7.6938 16.4922C7.7898 16.4556 7.8837 16.4163 7.9767 16.374C8.08984 16.3217 8.22356 16.3456 8.3115 16.434L8.547 16.6692C8.89931 17.0182 9.46721 17.0175 9.8187 16.6677L10.6665 15.8199C11.0163 15.468 11.0163 14.8998 10.6665 14.5479L10.4316 14.3127C10.343 14.2249 10.319 14.091 10.3716 13.9779C10.4139 13.8849 10.4532 13.791 10.4916 13.6947C10.5339 13.5775 10.6454 13.4996 10.77 13.5H11.1C11.5971 13.5 12 13.0971 12 12.6V11.4C12 10.9029 11.5971 10.5 11.1 10.5ZM11.4 12.6C11.4 12.7657 11.2657 12.9 11.1 12.9H10.77C10.3971 12.9014 10.0633 13.1319 9.93 13.4802C9.8982 13.5642 9.86381 13.6469 9.8268 13.7283C9.67256 14.0688 9.74411 14.4692 10.0068 14.7351L10.2414 14.97C10.3586 15.0871 10.3587 15.2771 10.2416 15.3943C10.2415 15.3944 10.2415 15.3944 10.2414 15.3945L9.3936 16.2423C9.27645 16.3594 9.08655 16.3594 8.9694 16.2423L8.7342 16.0074C8.46836 15.7445 8.06786 15.6729 7.7274 15.8274C7.6461 15.8643 7.5633 15.8988 7.4799 15.9306C7.13186 16.0639 6.9015 16.3973 6.9 16.77V17.1C6.9 17.2657 6.76568 17.4 6.6 17.4H5.4C5.23433 17.4 5.1 17.2657 5.1 17.1V16.77C5.09861 16.3971 4.8681 16.0633 4.5198 15.93C4.4358 15.8982 4.35311 15.8638 4.2717 15.8268C3.9312 15.6726 3.53089 15.7442 3.2649 16.0068L3.03 16.2414C2.91293 16.3586 2.72295 16.3587 2.60573 16.2416C2.60565 16.2415 2.60558 16.2415 2.6055 16.2414L1.7577 15.3945C1.64059 15.2774 1.64059 15.0875 1.7577 14.9703L1.9926 14.7351C2.25529 14.4692 2.32684 14.0688 2.1726 13.7283C2.1357 13.647 2.1012 13.5642 2.0694 13.4808C1.93642 13.1324 1.6029 12.9017 1.23 12.9H0.9C0.734325 12.9 0.6 12.7657 0.6 12.6V11.4C0.6 11.2343 0.734325 11.1 0.9 11.1H1.23C1.60294 11.0986 1.93669 10.8681 2.07 10.5198C2.1018 10.4358 2.13619 10.3531 2.1732 10.2717C2.32744 9.9312 2.25585 9.53085 1.9932 9.2649L1.7574 9.03C1.64017 8.91293 1.64006 8.72295 1.75718 8.60572C1.75725 8.60565 1.75733 8.60557 1.7574 8.6055L2.6052 7.7577C2.72235 7.64059 2.91225 7.64059 3.0294 7.7577L3.2646 7.9926C3.53044 8.25551 3.93094 8.3271 4.2714 8.1726C4.3527 8.1357 4.4355 8.1012 4.5189 8.0694C4.86742 7.93654 5.09831 7.60298 5.1 7.23V6.9C5.1 6.73432 5.23433 6.6 5.4 6.6H6.6C6.76568 6.6 6.9 6.73432 6.9 6.9V7.23C6.90139 7.60294 7.1319 7.93669 7.4802 8.07C7.5642 8.1018 7.64689 8.13619 7.7283 8.1732C8.06876 8.3277 8.46926 8.25611 8.7351 7.9932L8.97 7.7586C9.0876 7.64227 9.2769 7.64227 9.3945 7.7586L10.2423 8.6064C10.3594 8.72355 10.3594 8.91345 10.2423 9.0306L10.0074 9.2658C9.74475 9.53175 9.67316 9.9321 9.8274 10.2726C9.8643 10.3539 9.8988 10.4367 9.9306 10.5201C10.0639 10.8681 10.3973 11.0985 10.77 11.1H11.1C11.2657 11.1 11.4 11.2343 11.4 11.4V12.6Z" />
                <path d="M8.6939 11.88C8.6909 11.808 8.6858 11.7363 8.6771 11.6649C8.6675 11.5881 8.6561 11.5119 8.6402 11.4372C8.6297 11.3883 8.6159 11.34 8.6027 11.2914C8.5859 11.2296 8.567 11.1687 8.546 11.1087C8.5313 11.067 8.516 11.0256 8.5004 10.9845C8.46177 10.8885 8.4176 10.7947 8.3681 10.7037C8.3642 10.6968 8.3618 10.6893 8.3579 10.6824C8.27986 10.5435 8.18948 10.4119 8.0879 10.2891C8.0792 10.2783 8.0693 10.2681 8.0603 10.2576C8.0189 10.2087 7.9763 10.1613 7.9316 10.116C7.9082 10.0917 7.8836 10.0689 7.859 10.0455C7.829 10.0176 7.799 9.99005 7.769 9.96365C7.73258 9.93204 7.6955 9.90144 7.6577 9.87185L7.6085 9.83525C7.14428 9.48755 6.57987 9.29975 5.9999 9.30005C5.9699 9.30005 5.9399 9.30455 5.9099 9.30575C5.846 9.30755 5.7818 9.31115 5.7173 9.31775C5.6834 9.32135 5.6492 9.32525 5.6153 9.33005C5.5175 9.34291 5.42045 9.36106 5.3246 9.38435C3.88006 9.75762 3.01163 11.2313 3.38491 12.6758C3.63091 13.6277 4.37461 14.3708 5.3267 14.616C5.3315 14.616 5.3366 14.6175 5.3417 14.6187C5.44531 14.6446 5.55027 14.6646 5.6561 14.6788C5.726 14.6874 5.7959 14.6892 5.8661 14.6925C5.9129 14.6949 5.9561 14.7018 6.005 14.7018C6.0905 14.7018 6.1793 14.6961 6.2699 14.6872C6.2795 14.6872 6.2891 14.6844 6.2999 14.6832C6.3728 14.6751 6.4466 14.6644 6.5219 14.6494C6.5519 14.6437 6.5798 14.6361 6.6086 14.6295C6.6614 14.6172 6.7139 14.6043 6.7679 14.5884C6.8099 14.5758 6.8507 14.5611 6.8918 14.5467C6.9329 14.5323 6.9755 14.5167 7.0181 14.5005C7.0607 14.4843 7.0964 14.4657 7.1351 14.4477C7.1855 14.4246 7.2356 14.4018 7.2851 14.3748H7.2869C7.56687 14.225 7.82547 14.0382 8.0558 13.8195C8.11801 13.7615 8.17212 13.6953 8.2166 13.6227C8.45075 13.2474 8.60457 12.8276 8.6684 12.3897C8.6768 12.3318 8.6843 12.2739 8.6888 12.2148C8.693 12.1605 8.696 12.1065 8.6972 12.0525C8.6972 12.0354 8.6996 12.0192 8.6996 12.0021C8.6999 11.9598 8.6957 11.9208 8.6939 11.88ZM8.096 12.0765C8.096 12.1014 8.0939 12.1263 8.0924 12.1509C8.087 12.2235 8.0777 12.2961 8.0654 12.369C7.95327 12.9928 7.56601 13.5328 7.0112 13.839C6.974 13.8585 6.9374 13.8768 6.9008 13.8936L6.8759 13.9056C6.7016 13.9848 6.51762 14.0405 6.3287 14.0712C6.3155 14.0733 6.302 14.0757 6.2885 14.0775C6.251 14.0829 6.2141 14.0875 6.1775 14.0907C6.1292 14.0949 6.0806 14.0973 6.0311 14.0982C6.0101 14.0982 5.9894 14.0982 5.9684 14.0982C5.89741 14.0974 5.82653 14.093 5.756 14.085L5.72 14.0808C5.6375 14.07 5.55567 14.0546 5.4749 14.0346C4.35132 13.7471 3.67362 12.6031 3.96117 11.4795C4.15118 10.7371 4.73056 10.1571 5.4728 9.96635V9.96605C5.64515 9.92259 5.82215 9.90039 5.9999 9.90005C6.08566 9.90054 6.17135 9.90635 6.2564 9.91745C6.2792 9.92015 6.3017 9.92435 6.3242 9.92765C6.389 9.93785 6.4532 9.95075 6.5165 9.96695C6.5372 9.97235 6.5579 9.97715 6.5783 9.98285C6.73782 10.0289 6.89138 10.0935 7.0358 10.1754C7.0589 10.1889 7.0814 10.203 7.1042 10.2171C7.1516 10.2471 7.1975 10.2771 7.2428 10.3113C7.2671 10.329 7.2917 10.3464 7.3151 10.3653C7.37397 10.4124 7.43033 10.4624 7.484 10.5153C7.5053 10.5369 7.5248 10.5606 7.5455 10.5831C7.58 10.6206 7.6136 10.659 7.6457 10.6995C7.6679 10.7274 7.6892 10.7562 7.7102 10.7853C7.7402 10.8285 7.7702 10.8735 7.7972 10.9191C7.8122 10.944 7.8272 10.9683 7.8425 10.9938C7.8812 11.0651 7.91566 11.1385 7.9457 11.2137C7.9577 11.2437 7.9679 11.2737 7.9787 11.3037C7.9982 11.3589 8.015 11.4147 8.0297 11.4711C8.0372 11.5011 8.0456 11.5278 8.0519 11.5569C8.06941 11.638 8.08212 11.7201 8.09 11.8026C8.0918 11.8245 8.0918 11.8467 8.0933 11.8686C8.0975 11.9376 8.0987 12.0069 8.096 12.0765Z" />
                <path d="M17.1002 6.3H16.1567C16.0309 6.30128 15.9183 6.22204 15.8771 6.1032C15.784 5.82454 15.6715 5.55274 15.5402 5.2899C15.4844 5.17639 15.5077 5.03993 15.5978 4.9512L16.2668 4.2813C16.6179 3.92989 16.6179 3.36041 16.2668 3.009L14.9912 1.7355C14.6398 1.38435 14.0703 1.38435 13.7189 1.7355L13.0502 2.4039C12.9616 2.49397 12.8253 2.5173 12.7118 2.4618C12.4489 2.32984 12.177 2.21666 11.8982 2.1231C11.7788 2.08226 11.699 1.96961 11.7002 1.8435V0.9C11.7002 0.402938 11.2972 0 10.8002 0H9.00016C8.5031 0 8.10016 0.402938 8.10016 0.9V1.8435C8.10144 1.96931 8.02224 2.08185 7.90336 2.1231C7.62466 2.21663 7.35286 2.32973 7.09006 2.4615C6.97655 2.51741 6.84001 2.4942 6.75136 2.4039L6.08146 1.7349C5.72964 1.38476 5.16099 1.38476 4.80916 1.7349L3.53596 3.0081C3.18463 3.35955 3.18463 3.92925 3.53596 4.2807L4.51966 5.2662C4.63865 5.38148 4.82859 5.37848 4.94386 5.25945C5.05633 5.14335 5.05659 4.959 4.94446 4.8426L3.96016 3.8574C3.84305 3.74025 3.84305 3.55035 3.96016 3.4332L5.23336 2.16C5.35051 2.04289 5.54041 2.04289 5.65756 2.16L6.32776 2.829C6.59893 3.10178 7.01443 3.16995 7.35856 2.9982C7.5962 2.87921 7.8419 2.77706 8.09386 2.6925C8.45754 2.56939 8.70174 2.22746 8.70016 1.8435V0.9C8.70016 0.734325 8.83449 0.6 9.00016 0.6H10.8002C10.9658 0.6 11.1002 0.734325 11.1002 0.9V1.8435C11.0986 2.22739 11.3428 2.5692 11.7065 2.6922C11.9585 2.7768 12.2044 2.87903 12.4421 2.9982C12.7863 3.16905 13.2012 3.1008 13.4726 2.8287L14.1428 2.16C14.2599 2.04289 14.4498 2.04289 14.567 2.16L15.8402 3.4335C15.9571 3.55061 15.9571 3.74029 15.8402 3.8574L15.1712 4.5276C14.8987 4.79891 14.8305 5.21423 15.002 5.5584C15.121 5.79604 15.2231 6.04174 15.3077 6.2937C15.4307 6.65745 15.7727 6.90165 16.1567 6.9H17.1002C17.2658 6.9 17.4002 7.03433 17.4002 7.2V9C17.4002 9.16568 17.2658 9.3 17.1002 9.3H16.1567C15.7728 9.29846 15.431 9.54266 15.308 9.9063C15.2234 10.1584 15.1211 10.4042 15.002 10.6419C14.8308 10.9861 14.8991 11.4012 15.1715 11.6724L15.8405 12.3426C15.9576 12.4598 15.9576 12.6497 15.8405 12.7668L14.5667 14.04C14.4496 14.1569 14.2599 14.1569 14.1428 14.04L13.157 13.0563C13.0417 12.9373 12.8518 12.9343 12.7328 13.0496C12.6137 13.1648 12.6107 13.3548 12.726 13.4738C12.7284 13.4762 12.7309 13.4787 12.7334 13.4811L13.7189 14.4648C14.0703 14.816 14.6398 14.816 14.9912 14.4648L16.2644 13.1919C16.6157 12.8405 16.6157 12.2708 16.2644 11.9193L15.5963 11.25C15.5063 11.1614 15.483 11.0251 15.5384 10.9116C15.6703 10.6487 15.7835 10.3769 15.8771 10.098C15.9179 9.97867 16.0306 9.89888 16.1567 9.9H17.1002C17.5972 9.9 18.0002 9.49706 18.0002 9V7.2C18.0002 6.70294 17.5972 6.3 17.1002 6.3Z" />
                <path d="M12.6575 5.34246C11.1336 3.82172 8.66623 3.82172 7.14231 5.34246C7.02722 5.46163 7.03052 5.65157 7.14969 5.76666C7.26594 5.87893 7.45026 5.87893 7.56651 5.76666C8.84657 4.46931 10.936 4.45532 12.2333 5.73538C13.5307 7.01544 13.5446 9.10483 12.2646 10.4022C12.2542 10.4127 12.2438 10.4231 12.2333 10.4335C12.1141 10.5486 12.1108 10.7385 12.226 10.8577C12.3411 10.9768 12.531 10.9801 12.6502 10.865C12.6526 10.8626 12.6551 10.8601 12.6575 10.8577C14.1782 9.33373 14.1782 6.86638 12.6575 5.34246Z" />
              </svg>
            </ProfileSidebarItem>

            <ProfileSidebarItem
              className={type == ProfileSidebarTypes.LogOut ? 'active' : ''}
              href={route('logout')}
              title='Log Out'
            >
              <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.5998 12.3312C12.6886 12.3312 12.7773 12.2972 12.845 12.2297L15.8352 9.24479C15.9708 9.10944 15.9708 8.89067 15.8352 8.75532C15.6996 8.61997 15.4805 8.61997 15.3449 8.75532L12.3546 11.7403C12.219 11.8756 12.219 12.0944 12.3546 12.2297C12.4222 12.2972 12.511 12.3312 12.5998 12.3312Z" />
                <path
                  d="M4.90684 14.234C5.0986 14.234 5.25361 14.0789 5.25361 13.8878V4.11227C5.25361 3.92119 5.0986 3.76611 4.90684 3.76611C4.71507 3.76611 4.56006 3.92119 4.56006 4.11227V13.8878C4.56006 14.0789 4.71541 14.234 4.90684 14.234Z" />
                <path
                  d="M15.3449 9.24487C15.4125 9.31237 15.5013 9.34629 15.5901 9.34629C15.6788 9.34629 15.7676 9.31237 15.8352 9.24487C15.9708 9.10952 15.9708 8.89075 15.8352 8.7554L12.845 5.77046C12.7094 5.63511 12.4902 5.63511 12.3546 5.77046C12.219 5.90581 12.219 6.12458 12.3546 6.25993L15.3449 9.24487Z" />
                <path
                  d="M5.3521 14.6783C5.54387 14.6783 5.69888 14.5232 5.69888 14.3321C5.69888 14.1411 5.54387 13.986 5.3521 13.986C5.298 13.986 5.25361 13.942 5.25361 13.8877C5.25361 13.6966 5.0986 13.5415 4.90684 13.5415C4.71507 13.5415 4.56006 13.6966 4.56006 13.8877C4.55971 14.3238 4.91516 14.6783 5.3521 14.6783Z" />
                <path
                  d="M4.90684 4.45857C5.0986 4.45857 5.25361 4.30349 5.25361 4.11241C5.25361 4.05841 5.298 4.0141 5.3521 4.0141C5.54387 4.0141 5.69887 3.85902 5.69887 3.66794C5.69887 3.47686 5.54387 3.32178 5.3521 3.32178C4.91516 3.32178 4.56006 3.67625 4.56006 4.11241C4.56006 4.30383 4.71541 4.45857 4.90684 4.45857Z" />
                <path
                  d="M1.07876 4.70121C-0.476885 7.54976 -0.340602 11.1554 1.42658 13.8866C2.73635 15.9113 4.84684 17.3461 7.21672 17.8231C7.80658 17.9418 8.402 18 8.99499 18C10.9213 18 12.8179 17.3842 14.3853 16.2194C14.5386 16.1051 14.5705 15.8881 14.456 15.7351C14.3419 15.5821 14.1252 15.5502 13.9709 15.6641C12.0792 17.0702 9.66774 17.6099 7.35369 17.1443C5.16622 16.7043 3.21803 15.3799 2.00916 13.511C0.378268 10.9899 0.252041 7.66192 1.6877 5.03248C3.13168 2.38851 5.99988 0.691629 9.01198 0.691629C9.03834 0.691629 9.06504 0.691629 9.09174 0.691975C12.1704 0.722783 15.0528 2.51659 16.4351 5.26199C17.7924 7.95788 17.5503 11.2956 15.8185 13.7647C15.7089 13.9215 15.7467 14.1372 15.9038 14.2469C16.0599 14.3563 16.277 14.3186 16.3869 14.1618C18.263 11.4866 18.5251 7.87134 17.0551 4.95079C15.5584 1.979 12.4392 0.0363469 9.10631 0H8.99326C5.73771 0.00726937 2.6396 1.8433 1.07876 4.70121Z" />
                <path
                  d="M15.9368 9.00021C15.9368 8.80913 15.7817 8.65405 15.59 8.65405H7.13242C6.94065 8.65405 6.78564 8.80913 6.78564 9.00021C6.78564 9.19129 6.94065 9.34637 7.13242 9.34637H15.59C15.7817 9.34637 15.9368 9.19129 15.9368 9.00021Z" />
                <path
                  d="M8.46794 13.9858H5.35215C5.16038 13.9858 5.00537 14.1409 5.00537 14.332C5.00537 14.5231 5.16038 14.6782 5.35215 14.6782H8.46794C8.65971 14.6782 8.81472 14.5231 8.81472 14.332C8.81472 14.1409 8.65971 13.9858 8.46794 13.9858Z" />
                <path
                  d="M5.35215 4.01434H8.46794C8.65971 4.01434 8.81472 3.85926 8.81472 3.66818C8.81472 3.4771 8.65971 3.32202 8.46794 3.32202H5.35215C5.16038 3.32202 5.00537 3.4771 5.00537 3.66818C5.00537 3.85926 5.16038 4.01434 5.35215 4.01434Z" />
                <path
                  d="M14.9721 14.7846C14.9097 14.8504 14.8716 14.9404 14.8716 15.0304C14.8716 15.1204 14.9097 15.2104 14.9756 15.2727C15.0384 15.3385 15.1282 15.3766 15.2184 15.3766C15.3123 15.3766 15.4022 15.3385 15.4646 15.2762C15.5305 15.2104 15.5651 15.1204 15.5651 15.0304C15.5651 14.9369 15.5305 14.8504 15.4646 14.7846C15.3363 14.6565 15.107 14.6531 14.9721 14.7846Z" />
              </svg>
            </ProfileSidebarItem>
          </ul>
        </div>
      </div>
      <ProfileSidebarWidget />
    </div>
  )
}

export default ProfileSidebar