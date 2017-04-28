package fi.gosu.ika.stats.repository;

import fi.gosu.ika.stats.domain.Troop;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Troop Repository
 *
 * @author Ville Nupponen
 * @since 0.1.0
 */
public interface TroopRepository extends JpaRepository<Troop, Long> {
}
