import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import DashboardLayout from "../components/dashboard/DashboardLayout"
import Breadcrumb from "../components/Breadcrumb"
import {
    ShieldCheck, Users, MapPin, Globe, Lock,
    MessageCircle, Heart, Share2, MoreHorizontal,
    Image as ImageIcon, Calendar
} from "lucide-react"

const CommunityDetail = () => {
    const { id } = useParams()
    const [activeTab, setActiveTab] = useState('feed')

    // Mock Data (would normally fetch based on ID)
    const communityData = {
        name: "BIKE Official",
        handle: "@bike_official",
        description: "The official community for BIKE app users. Stay updated with latest features, challenges, and tips to build better habits.",
        members: "128k",
        postsCount: "1.2k",
        type: "official", // 'official', 'public', 'private'
        coverImage: "bg-gradient-to-r from-orange-400 to-red-500",
        avatar: "🚲",
        avatarBg: "bg-white text-orange-600",
        joined: true
    }

    // Mock Posts for this community
    const posts = [
        {
            id: 101,
            user: { name: "BIKE Team", avatar: "🚲", color: "bg-orange-500", tribe: "Admin" },
            time: "1 hour ago",
            content: "Welcome to the new Community features! 🚀 Use this space to connect with other habit builders.",
            stats: { likes: 1240, comments: 85 },
            liked: true,
            official: true
        },
        {
            id: 102,
            user: { name: "Alex Morgan", avatar: "AM", color: "bg-blue-500", tribe: "Member" },
            time: "3 hours ago",
            content: "Love the new update! The UI looks so clean now.",
            stats: { likes: 45, comments: 12 },
            liked: false
        }
    ]

    const renderBadge = (type) => {
        if (type === 'official') {
            return (
                <div className="flex items-center gap-1 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                    <ShieldCheck size={14} className="text-blue-500 fill-blue-500" />
                    <span className="text-xs font-bold text-blue-600">Official Community</span>
                </div>
            )
        }
        if (type === 'private') {
            return (
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-full border border-gray-200">
                    <Lock size={14} className="text-gray-500" />
                    <span className="text-xs font-bold text-gray-600">Private Group</span>
                </div>
            )
        }
        return (
            <div className="flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                <Globe size={14} className="text-green-500" />
                <span className="text-xs font-bold text-green-600">Public Group</span>
            </div>
        )
    }

    return (
        <DashboardLayout>
            <div className="flex flex-col gap-6 max-w-4xl mx-auto pb-20 lg:pb-0">
                {/* Breadcrumb */}
                <Breadcrumb items={[
                    { label: 'Community', href: '/community' },
                    { label: communityData.name, active: true }
                ]} />

                {/* Cover & Profile Header */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden relative">
                    {/* Cover Image */}
                    <div className={`h-32 md:h-48 ${communityData.coverImage}`}></div>

                    <div className="px-6 pb-6 pt-0">
                        <div className="flex flex-col md:flex-row items-start md:items-end gap-4 -mt-10 mb-4">
                            {/* Avatar */}
                            <div className={`size-24 rounded-2xl ${communityData.avatarBg} border-4 border-white shadow-sm flex items-center justify-center text-4xl relative z-10`}>
                                {communityData.avatar}
                            </div>

                            {/* Info */}
                            <div className="flex-1 mt-2 md:mt-0">
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                    <h1 className="text-2xl font-extrabold text-gray-900">{communityData.name}</h1>
                                    {renderBadge(communityData.type)}
                                </div>
                                <p className="text-gray-500 font-medium text-sm">{communityData.handle}</p>
                            </div>

                            {/* Action Button */}
                            <button className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all md:self-center mt-2 md:mt-0 ${communityData.joined
                                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-transparent"
                                    : "bg-primary text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30"
                                }`}>
                                {communityData.joined ? "Joined" : "Join Tribe"}
                            </button>
                        </div>

                        {/* Bio / Stats */}
                        <div className="space-y-4">
                            <p className="text-gray-700 font-medium leading-relaxed">{communityData.description}</p>

                            <div className="flex items-center gap-6 text-sm">
                                <div className="flex items-center gap-1.5 font-bold text-gray-900">
                                    <span className="text-lg">{communityData.members}</span>
                                    <span className="text-gray-500 font-medium">Members</span>
                                </div>
                                <div className="flex items-center gap-1.5 font-bold text-gray-900">
                                    <span className="text-lg">{communityData.postsCount}</span>
                                    <span className="text-gray-500 font-medium">Posts</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex items-center border-t border-gray-100 px-2 sticky top-[73px] bg-white/95 backdrop-blur-sm z-30">
                        <button
                            onClick={() => setActiveTab('feed')}
                            className={`px-4 py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'feed' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
                        >
                            Feed
                        </button>
                        <button
                            onClick={() => setActiveTab('about')}
                            className={`px-4 py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'about' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
                        >
                            About
                        </button>
                        <button
                            onClick={() => setActiveTab('members')}
                            className={`px-4 py-4 text-sm font-bold border-b-2 transition-colors ${activeTab === 'members' ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-900'}`}
                        >
                            Members
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="space-y-4">
                    {activeTab === 'feed' && (
                        <div className="space-y-4">
                            {/* Create Post (Only if joined) */}
                            {communityData.joined && (
                                <div className="bg-white p-4 rounded-2xl border border-gray-100 flex gap-4 items-center">
                                    <div className="size-10 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold">ME</div>
                                    <input
                                        type="text"
                                        placeholder={`Post to ${communityData.name}...`}
                                        className="flex-1 bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 rounded-2xl px-4 py-3 text-sm font-medium transition-colors outline-none border hover:bg-gray-100"
                                    />
                                    <button className="p-3 rounded-2xl bg-gray-100 text-gray-500 hover:bg-primary hover:text-white transition-colors">
                                        <ImageIcon size={20} className="fill-current" />
                                    </button>
                                </div>
                            )}

                            {/* Posts */}
                            {posts.map(post => (
                                <div key={post.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                                    <div className="p-4 flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <div className={`size-10 rounded-full ${post.user.color} text-white flex items-center justify-center font-bold text-sm bg-cover bg-center`}>
                                                {post.user.avatar}
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h4 className="font-bold text-gray-900 text-sm">{post.user.name}</h4>
                                                    {post.official && <ShieldCheck size={14} className="text-blue-500 fill-blue-500" />}
                                                    <span className="text-gray-300">•</span>
                                                    <span className="text-xs font-bold text-gray-400">{post.time}</span>
                                                </div>
                                                <p className="text-xs font-bold text-primary bg-orange-50 px-2 py-0.5 rounded-full inline-block mt-1">{post.user.tribe}</p>
                                            </div>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-900 transition-colors">
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </div>
                                    <div className="px-4 pb-2">
                                        <p className="text-gray-800 text-sm leading-relaxed">{post.content}</p>
                                    </div>
                                    <div className="p-4 mt-2 flex items-center justify-between border-t border-gray-50">
                                        <div className="flex items-center gap-6">
                                            <button className={`flex items-center gap-2 text-sm font-bold transition-colors ${post.liked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'}`}>
                                                <Heart size={20} className={post.liked ? 'fill-current' : ''} />
                                                {post.stats.likes}
                                            </button>
                                            <button className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-500 transition-colors">
                                                <MessageCircle size={20} />
                                                {post.stats.comments}
                                            </button>
                                        </div>
                                        <button className="text-gray-400 hover:text-gray-900 transition-colors">
                                            <Share2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'about' && (
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center py-12">
                            <p className="text-gray-500 font-medium">About section content...</p>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    )
}

export default CommunityDetail
