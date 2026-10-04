import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // EXTERNAL STYLING

  container: {
    flex: 1,
    backgroundColor: '#F6F7F9',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 45,
    marginBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#171717',
  },

  logoIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#171717',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoEmoji: {
    fontSize: 22,
  },

  welcomeCard: {
    backgroundColor: '#171717',
    borderRadius: 20,
    padding: 22,
    marginBottom: 28,
  },

  welcomeSmall: {
    fontSize: 13,
    color: '#BDBDBD',
    marginBottom: 8,
  },

  welcomeTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 33,
  },

  welcomeDescription: {
    fontSize: 13,
    color: '#BDBDBD',
    lineHeight: 20,
    marginTop: 12,
  },

  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#171717',
  },

  sectionSubtitle: {
    fontSize: 12,
    color: '#888888',
    marginTop: 4,
  },

  menuBadge: {
    backgroundColor: '#E9E9E9',
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderRadius: 20,
  },

  menuBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555555',
  },

  foodCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 15,
    marginBottom: 14,
    flexDirection: 'row',
  },

  foodIcon: {
    width: 65,
    height: 65,
    borderRadius: 16,
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },

  foodEmoji: {
    fontSize: 31,
  },

  foodContent: {
    flex: 1,
  },

  category: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#999999',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  foodName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#171717',
    marginTop: 2,
  },

  foodDescription: {
    fontSize: 11,
    color: '#888888',
    lineHeight: 16,
    marginTop: 4,
  },

  foodBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  price: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#171717',
  },

  button: {
    backgroundColor: '#171717',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 9,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  footer: {
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 35,
    paddingTop: 15,
  },

  footerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333333',
  },

  footerText: {
    fontSize: 11,
    color: '#888888',
    marginTop: 3,
  },

  footerCopyright: {
    fontSize: 10,
    color: '#AAAAAA',
    marginTop: 8,
  },
});